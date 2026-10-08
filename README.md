# TrustLens

TrustLens is a polished fraud-operations workspace for fintech and payments teams. This repository ships an interactive front-end prototype: a marketing site, workspace onboarding, and an analyst dashboard for reviewing and resolving high-risk transactions.

## Included

- Responsive product landing page
- Demo sign-in and company workspace setup
- Fraud-operations dashboard with transaction health, model pulse, alerts, case explanations, filters, search, and actions
- Local demo persistence for the company name and session state
- Render blueprint in `render.yaml`

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use any valid email address in the sign-in screen to enter the demo.

## Production notes

The present app deliberately uses local demo data; it does not claim to authenticate users or process real transactions. The product specification calls for Supabase Auth/Postgres with RLS, Redis-backed sessions, and a FastAPI service. Add the corresponding environment variables and server integration before using it with production data.

## Deploy to Render

The repository includes `render.yaml`. In Render, create a Blueprint service from this repository; it will use `npm ci && npm run build` and `npm run start`.
