# Prime Accounting & Tax Solutions Website

This is the polished Next.js + Tailwind website for Prime Accounting & Tax Solutions.

## Main updates in this version

- Uses only the black Prime logo mark in the header, and the full Prime logo in the hero and footer.
- Uses the single Xero logo at the top of the Xero section and the official Xero / Bronze Partner / Certified Advisor collateral in the badge card and footer.
- Removes the screenshot-like Xero image problem.
- Uses a blue + grey colour palette, with black only as an accent.

- Reduces the size and weight of the large headings so they are softer and less visually heavy.
- Adds a working front-end inquiry form routed through `/api/contact`.
- Keeps the footer compact while showing the Prime logo and tagline.

## Required Form Setup

The inquiry form no longer uses FormSubmit.

Instead, create a Formspree form and add the endpoint in Vercel as an environment variable.

1. Go to Formspree and create a form.
2. Set the recipient email to `info@patspng.com`.
3. Copy the endpoint. It will look like:

   `https://formspree.io/f/xxxxxxxx`

4. In Vercel, go to:

   Project → Settings → Environment Variables

5. Add:

   `FORMSPREE_ENDPOINT`

6. Paste the Formspree endpoint as the value.
7. Save it for Production, Preview, and Development if available.
8. Redeploy the project.

Without this environment variable, the form will show a setup error instead of sending.

## Local setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy settings for Vercel

- Framework Preset: Next.js
- Root Directory: `./`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: blank/default
