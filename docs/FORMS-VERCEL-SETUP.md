# Forms on Vercel — setup

Contact form **and** checkout POST to `/api/submit` (a Next.js route handler that
runs as a Vercel serverless function). It emails each submission to
`info@volttrackhub.com` using **Resend** (the Vercel-recommended email API — Vercel
itself does not send email).

Until `RESEND_API_KEY` is set the endpoint still returns success, so the site never
dead-ends a customer — submissions are accepted and logged but **not emailed**.
Setting the key activates delivery. No code changes are needed to go live.

## One-time setup (≈10 minutes)

1. **Create a Resend account** — https://resend.com (free tier: 3,000 emails/month).

2. **Add and verify the domain** `volttrackhub.com`
   - Resend → **Domains** → **Add Domain** → `volttrackhub.com`.
   - Resend shows a few DNS records (an MX/SPF `send` record and 1–2 DKIM `TXT`
     records). Add them at your domain registrar / DNS host exactly as shown.
   - Wait for Resend to show the domain as **Verified** (usually minutes, up to a
     few hours). Sending fails until it is verified.
   - The "from" address is set in `src/config/site.js` → `FORMS.resendFrom`
     (currently `VoltTrack <orders@volttrackhub.com>`). It must be on the verified
     domain — change the mailbox name there if you prefer a different one.

3. **Create an API key** — Resend → **API Keys** → **Create** (Sending access is
   enough). Copy it (starts with `re_`).

4. **Add the key to Vercel** — Vercel project → **Settings → Environment
   Variables**:
   - Name: `RESEND_API_KEY`
   - Value: the `re_...` key
   - Environments: **Production** (and Preview if you want form emails from
     preview deploys).

5. **Redeploy** (Vercel → Deployments → Redeploy, or push any commit). Done —
   contact and order emails now arrive at `info@volttrackhub.com`.

> Tip: Vercel Marketplace has a one-click **Resend** integration that creates the
> account link and sets `RESEND_API_KEY` for you automatically. Either path works.

## Where things live
- Endpoint: `src/app/api/submit/route.js`
- Recipient / from address: `FORMS.orderEmail`, `FORMS.resendFrom` in `src/config/site.js`
- Contact form: `src/components/WebForm.jsx`
- Checkout: `src/app/checkout/CheckoutClient.jsx`

## Test after setup
Submit the contact form (or place a test order). A `re_...`-authenticated email
should arrive at `info@volttrackhub.com` within seconds. If nothing arrives, check
Resend → **Logs** and confirm the domain is Verified and the env var is set on the
deployment you're testing.
