# Prime Accounting & Tax Solutions Website

This is the polished Next.js + Tailwind website for Prime Accounting & Tax Solutions.

## Main files

- `pages/index.js` — homepage
- `pages/thank-you.js` — confirmation page after inquiry form submission
- `pages/_app.js` — imports global Tailwind CSS
- `styles/globals.css` — Tailwind directives and basic global styling
- `public/prime-logo.jpg` — full Prime logo
- `public/prime-icon.png` — Prime icon
- `public/xero-logo.png` — Xero logo
- `public/xero-bronze-certified-badge.png` — Xero / Bronze Partner / Certified Advisor collateral

## Local setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy

Upload the full contents of this folder to GitHub. Vercel should be set to:

- Framework Preset: Next.js
- Root Directory: `./`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: blank/default

## Inquiry form

The inquiry form uses FormSubmit:

`https://formsubmit.co/info@patspng.com`

The first test submission may send an activation email to `info@patspng.com`. After activation, submissions will be forwarded to that email address.
