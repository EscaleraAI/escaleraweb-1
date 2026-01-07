import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend inside the handler after verifying the API key

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  interest: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { name, company, email, interest } = (await req.json()) as ContactPayload;

    if (!name || !company || !email || !interest) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Ensure email service is configured
    const resendKey = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY present:", !!resendKey);
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Resend lazily now that we have a key
    const resend = new Resend(resendKey);

    const subject = `New Contact Submission • ${name}`;
    const html = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <hr />
      <p>Submitted from Escalera website contact form.</p>
    `;

    console.log("Sending contact email to admin@escalera.ai");
    const sendResult = await resend.emails.send({
      from: "Escalera Website <onboarding@resend.dev>",
      to: ["admin@escalera.ai"],
      reply_to: email,
      subject,
      html,
    });

    // If Resend returned an error in the response payload, surface it
    const possibleError = (sendResult as any)?.error;
    if (possibleError) {
      console.error("Resend send error:", possibleError);
      return new Response(
        JSON.stringify({ error: possibleError?.message || "Email send failed" }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Email sent successfully:", sendResult);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("send-contact error:", error?.message || error);
    return new Response(JSON.stringify({ error: error?.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
