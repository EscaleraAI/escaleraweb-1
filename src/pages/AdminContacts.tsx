import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { cleanupAuthState } from "@/lib/auth";

const setSeo = () => {
  document.title = 'Contacts Admin – EscaleraAI';
  const desc = 'Admin dashboard to view contact form submissions.';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', desc);
  else {
    const m = document.createElement('meta');
    m.name = 'description';
    m.content = desc;
    document.head.appendChild(m);
  }
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = window.location.href;
};

export default function AdminContacts() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [contacts, setContacts] = useState<Array<{ id: string; name: string; company: string; email: string; interest: string; submitted_at: string }>>([]);

  useEffect(() => {
    setSeo();

    // Listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        navigate('/auth');
      }
    });

    // Then check session and load data
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      if (!user) {
        navigate('/auth');
        return;
      }

      try {
        const { data: roleOk, error: roleErr } = await supabase.rpc('has_role', { _user_id: user.id, _role: 'admin' });
        if (roleErr) throw roleErr;
        setIsAdmin(!!roleOk);

        if (!roleOk) {
          toast.error('You do not have permission to view contacts.');
          setLoading(false);
          return;
        }

        const { data, error } = await supabase.from('contacts').select('*').order('submitted_at', { ascending: false });
        if (error) throw error;
        setContacts(data || []);
      } catch (e: any) {
        toast.error(e?.message || 'Failed to load contacts');
      } finally {
        setLoading(false);
      }
    })();

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      cleanupAuthState();
      try { await supabase.auth.signOut({ scope: 'global' }); } catch {}
      window.location.href = '/auth';
    } catch {}
  };

  const filtered = useMemo(() => contacts, [contacts]);

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Contact Submissions</h1>
            <p className="text-sm text-muted-foreground">View entries submitted via the website contact form.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={() => navigate('/')}>Home</Button>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </header>

        {!isAdmin && !loading ? (
          <p className="text-muted-foreground">You need admin access to view this page.</p>
        ) : null}

        {loading ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : (
          <section className="grid grid-cols-1 gap-4">
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground">No submissions yet.</p>
              </div>
            ) : (
              filtered.map((c) => (
                <article key={c.id} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-medium text-foreground">{c.name} <span className="text-muted-foreground font-normal">• {new Date(c.submitted_at).toLocaleString()}</span></h2>
                    <p className="text-sm text-muted-foreground">{c.company || '—'}</p>
                    <p className="text-sm text-muted-foreground">{c.email}</p>
                    <p className="text-sm text-foreground mt-2">Interest: <span className="text-muted-foreground">{c.interest}</span></p>
                  </div>
                </article>
              ))
            )}
          </section>
        )}
      </div>
    </main>
  );
}
