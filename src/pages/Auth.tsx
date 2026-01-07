import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cleanupAuthState } from "@/lib/auth";
import { toast } from "sonner";

const setSeo = (title: string, description: string) => {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', description);
  else {
    const m = document.createElement('meta');
    m.name = 'description';
    m.content = description;
    document.head.appendChild(m);
  }
  // Canonical
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = window.location.href;
};

export default function Auth() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSeo(
      mode === 'login' ? 'Login – EscaleraAI' : 'Sign Up – EscaleraAI',
      mode === 'login' ? 'Login to EscaleraAI admin to manage contact submissions.' : 'Create an account to access EscaleraAI admin features.'
    );

    // Auth listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // Redirect authenticated users to home
        window.location.href = '/';
      }
    });
    // Then check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        window.location.href = '/';
      }
    });

    return () => subscription.unsubscribe();
  }, [mode]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      cleanupAuthState();
      try { await supabase.auth.signOut({ scope: 'global' }); } catch {}
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success('Logged in successfully');
      window.location.href = '/';
    } catch (err: any) {
      toast.error(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectUrl }
      });
      if (error) throw error;
      toast.success('Sign up successful. Check your email to confirm.');
    } catch (err: any) {
      toast.error(err?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <article className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            {mode === 'login' ? 'Login' : 'Create your account'}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === 'login' ? 'Access the admin dashboard.' : 'Sign up with email and password.'}
          </p>
        </header>

        <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-foreground">Email</label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-foreground">Password</label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (mode === 'login' ? 'Logging in…' : 'Signing up…') : (mode === 'login' ? 'Login' : 'Sign Up')}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          {mode === 'login' ? (
            <button className="text-primary hover:underline" onClick={() => setMode('signup')}>No account? Sign up</button>
          ) : (
            <button className="text-primary hover:underline" onClick={() => setMode('login')}>Have an account? Login</button>
          )}
        </div>
      </article>
    </main>
  );
}
