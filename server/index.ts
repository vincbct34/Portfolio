import { readFileSync } from "node:fs";
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

// The built English shell. The French page is the same shell with a localized
// `<head>` injected at request time, so each language has its own indexable
// URL (`/` → English, `/fr` → French) without a separate build.
const ORIGIN = "https://www.vincent-bichat.fr";
const EN_TITLE = "Vincent Bichat — Full-Stack Developer & Studio 404Factory";
const FR_TITLE = "Vincent Bichat — Développeur Full-Stack & Studio 404Factory";
const EN_DESC =
  "Vincent Bichat — full-stack developer and founder of the studio 404Factory. I build modern web apps and sites with React, Next.js, and TypeScript that businesses are proud to send people to.";
const FR_DESC =
  "Vincent Bichat — développeur full-stack et fondateur du studio 404Factory. Je conçois des applications et sites web modernes en React, Next.js et TypeScript dont les entreprises sont fières.";
const EN_TWITTER_DESC =
  "Full-stack developer and founder of the studio 404Factory. Modern web apps and sites built with React, Next.js, and TypeScript.";
const FR_TWITTER_DESC =
  "Développeur full-stack et fondateur du studio 404Factory. Applications et sites web modernes en React, Next.js et TypeScript.";

let cachedShell: string | null = null;
const enShell = () =>
  (cachedShell ??= readFileSync("./dist/index.html", "utf8"));

// Swap the English `<head>` defaults for their French counterparts. Targets
// full attribute strings so unrelated URLs (og:image, JSON-LD) are untouched.
const frShell = () =>
  enShell()
    .replace('<html lang="en">', '<html lang="fr">')
    .replace(
      '<link rel="canonical" href="https://www.vincent-bichat.fr/" />',
      `<link rel="canonical" href="${ORIGIN}/fr" />`,
    )
    .replace(
      '<meta property="og:url" content="https://www.vincent-bichat.fr/" />',
      `<meta property="og:url" content="${ORIGIN}/fr" />`,
    )
    .replace(
      '<meta property="og:locale" content="en_US" />',
      '<meta property="og:locale" content="fr_FR" />',
    )
    .replace(
      '<meta property="og:locale:alternate" content="fr_FR" />',
      '<meta property="og:locale:alternate" content="en_US" />',
    )
    .replaceAll(EN_TITLE, FR_TITLE)
    .replaceAll(EN_DESC, FR_DESC)
    .replaceAll(EN_TWITTER_DESC, FR_TWITTER_DESC);

// Serve the built SPA in production. Vite handles assets during `npm run dev`.
app.get("/", (c) => c.html(enShell()));
app.get("/fr", (c) => c.html(frShell()));
app.use("/*", serveStatic({ root: "./dist" }));
app.get("/*", (c) => c.html(enShell()));

serve({ fetch: app.fetch, port: PORT }, ({ port }) => {
  console.log(`Server listening on http://localhost:${port}`);
});
