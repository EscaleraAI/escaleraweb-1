import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { WobblyCard } from "@/components/ui/WobblyCard";

export default function Contact() {
  const [interest, setInterest] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const sanitize = (v: string, max = 200) =>
      v.trim()
        .replace(/[\t\r\n]+/g, ' ')
        .replace(/[<>"']/g, '')
        .slice(0, max);

    const name = sanitize(((formData.get("name") as string) || ""), 120);
    const company = sanitize(((formData.get("company") as string) || ""), 160);
    const email = sanitize(((formData.get("email") as string) || ""), 160).toLowerCase();

    if (!interest) {
      toast.error("Please select what you're interested in.");
      return;
    }

    // Simple client-side rate limit: 1 submission per 30s
    const last = Number(localStorage.getItem('contact:lastSubmit') || '0');
    const now = Date.now();
    if (now - last < 30_000) {
      toast.error("You're sending too fast. Please wait a few seconds and try again.");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase
        .from("contacts")
        .insert([{ name, company, email, interest }]);

      if (error) {
        throw new Error(error.message || "Failed to save submission");
      }

      localStorage.setItem('contact:lastSubmit', String(now));
      toast.success("Thanks! Your application was sent.");
      form.reset();
      setInterest("");
    } catch (err: any) {
      toast.error(err?.message || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <WobblyCard intensity="md" decoration="tape" className="bg-[#fffdf0]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center font-marker rotate-[-1deg]">
            Let's Build Something Cool
          </h2>
          <p className="text-center mb-10 text-xl font-hand text-muted-foreground">
            Whether it's consulting, co-development, or just a chat.
          </p>
          <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Input name="name" placeholder="Your Name" required className="bg-white" />
              <Input name="company" placeholder="Company Name" required className="bg-white" />
            </div>
            <Input name="email" type="email" placeholder="Email Address" required className="bg-white" />

            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger className="h-12 w-full rounded-wobbly border-2 border-input bg-white px-4 text-lg font-hand shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)] focus:ring-secondary/20">
                <SelectValue placeholder="I'm interested in..." />
              </SelectTrigger>
              <SelectContent className="font-hand text-lg border-2 border-foreground shadow-hard rounded-xl">
                <SelectItem value="consulting">AI Marketing Consulting</SelectItem>
                <SelectItem value="co-development">Co-Development Partnership</SelectItem>
                <SelectItem value="partnerships">General Partnership</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" size="lg" className="w-full text-xl mt-2" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </Button>
          </form>
        </WobblyCard>
      </div>
    </section>
  );
}
