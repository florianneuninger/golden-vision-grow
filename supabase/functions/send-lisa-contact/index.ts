import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  vorname: string;
  nachname: string;
  telefon: string;
  email: string;
  nachricht?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { vorname, nachname, telefon, email, nachricht }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { vorname, nachname, email, telefon });

    const emailContent = `
      <h2>Neue Kontaktanfrage von der Lisa Bruckner Seite</h2>
      <p><strong>Vorname:</strong> ${vorname}</p>
      <p><strong>Nachname:</strong> ${nachname}</p>
      <p><strong>Telefon:</strong> ${telefon}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      ${nachricht ? `<p><strong>Nachricht:</strong> ${nachricht}</p>` : ""}
    `;

    // Send email using Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Golden Vision <onboarding@resend.dev>",
        to: ["hey@neuninger.com", "lisa.19.07.b@gmail.com"],
        subject: `Neue Kontaktanfrage von ${vorname} ${nachname}`,
        html: emailContent,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lisa-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
