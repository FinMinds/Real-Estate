# Real Estate Monorepo

A web-first SaaS platform focused on Belgian real estate investment analysis.

## Architecture

**Monorepo** managed with pnpm workspaces and Turborepo.

- `apps/web` — Next.js 15 App Router frontend with locale-aware routing (nl/fr/en) via next-intl
- `packages/domain/*` — Pure domain packages (analysis, audit, cashflow-engine, entitlements, kpi-engine, loan-engine, reference-sources, rule-registry)
- `packages/db` — Database access (PostgreSQL + Drizzle, placeholder)
- `packages/shared` — Shared types and utilities (placeholder)
- `packages/ui` — Reusable UI components (placeholder)
- `tests/` — Fixtures, integration, e2e, and contract test placeholders
- `docs/architecture` — Architecture rules and documentation

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Package Manager:** pnpm@10.26.1 with workspaces
- **Build Orchestration:** Turborepo
- **i18n:** next-intl (nl, fr, en)
- **Database:** PostgreSQL + Drizzle (planned)
- **Payments:** Stripe (planned)
- **Email:** Resend (planned)
- **Monitoring:** Sentry (planned)

## Running the App

- **Dev:** `pnpm dev` (runs Next.js on port 3000)
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Test:** `pnpm test`
- **Typecheck:** `pnpm typecheck`

## Development Notes

- Frontend runs on port 3000 at 0.0.0.0
- `allowedDevOrigins: ['*']` set in next.config.ts to support Replit's proxy
- pnpm version updated to 10.26.1 to match the Replit environment
- Empty favicon.ico was removed (was causing build errors)
- This is a Step 1 scaffold — most packages have placeholder scripts

## Environment Variables

See `.env.example` for required environment variables:
- `NEXT_PUBLIC_APP_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`
- `DATABASE_URL`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `SENTRY_DSN`, `NEXT_PUBLIC_SENTRY_DSN`
- `RESEND_API_KEY`, `EMAIL_FROM`
