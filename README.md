# Real Estate Monorepo

Step 1 foundation for a web-first SaaS app focused on Belgian real estate investment analysis.

## Workspace

- `apps/web` — Next.js App Router frontend shell scaffold with locale-aware routing placeholders.
- `packages/domain/*` — pure domain package placeholders for future calculation and rule modules.
- `packages/db` — database access package placeholder for PostgreSQL and Drizzle.
- `packages/shared` — shared types and utilities placeholder.
- `packages/ui` — reusable UI package placeholder.
- `tests` — reserved folders for fixtures, integration, e2e, and contract tests.
- `docs/architecture` — durable architecture rules and supporting placeholders.

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm test`
- `pnpm typecheck`

## Step 1 Notes

- This repository intentionally stays dependency-light so the workspace installs cleanly at step 1.
- Package scripts are placeholders that keep the monorepo understandable without implementing business logic yet.
- The selected product stack remains documented in the scaffold and directory structure for later implementation.

## Principles

- Multilingual from day 1: `nl`, `fr`, `en`.
- Web-first structure that can later be wrapped in a native shell.
- Explainable, source-referenced, versioned, and auditable product architecture.
