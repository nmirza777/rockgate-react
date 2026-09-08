# rockgatecapital-site

Production website for Rockgate Capital Ltd — a Next.js app statically exported
and deployed to GitHub Pages at the custom domain rockgatecapital.co.uk.

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static
export (`next build`, `output: "export"`) and publishes it to GitHub Pages. The
custom domain is preserved via `public/CNAME`.

Company, contact and regulatory details are edited in `lib/siteConfig.js`.
