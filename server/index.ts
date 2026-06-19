import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { Resend } from "resend";

const PORT = Number(process.env.PORT ?? 3001);

// Sending only needs the domain verified in Resend (DKIM/SPF DNS records),
// not a real mailbox. Falls back to the Resend test sender, which only
// delivers to your own Resend account email until a domain is verified.
const FROM = process.env.CONTACT_FROM ?? "onboarding@resend.dev";
const TO = process.env.CONTACT_TO ?? "vincent260705@gmail.com";

const app = new Hono();

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

app.post("/api/contact", async (c) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return c.json({ error: "Email service not configured." }, 500);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid request body." }, 400);
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !isEmail(email)
  ) {
    return c.json({ error: "Missing or invalid fields." }, 400);
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return c.json({ error: "Fields too long." }, 400);
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Project enquiry — ${name}`,
    text: `${message}\n\n— ${name}\n${email}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return c.json({ error: "Could not send message." }, 502);
  }

  return c.json({ ok: true });
});

// Serve the built SPA in production. Vite handles assets during `npm run dev`.
app.use("/*", serveStatic({ root: "./dist" }));
app.get("/*", serveStatic({ path: "./dist/index.html" }));

serve({ fetch: app.fetch, port: PORT }, ({ port }) => {
  console.log(`Server listening on http://localhost:${port}`);
});
