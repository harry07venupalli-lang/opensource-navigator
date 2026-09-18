# Product decisions

## Evidence before AI

The product uses deterministic analysis because public GitHub facts, transparent rules, and visible uncertainty are useful without a paid inference dependency. `AnalysisProvider` remains the seam for a future local or external explanation layer, but the application must always work without one.

## A genuinely useful free core

Repository analysis, issue recommendations, contribution paths, and basic codebase mapping stay free because they are the first proof of product value. The product will not manufacture scarcity or block users from understanding an issue.

## What could become premium

Potential paid value is extra depth and repeated personalization: broader context tracing, readiness checks, fuller test/edge-case preparation, and contributor progression. These are defined centrally in `src/config/features.ts` as planned capabilities, not scattered subscription conditions.

## No auth or payments yet

Accounts, persistent usage tracking, and billing add cost, privacy burden, and product complexity before demand is established. They are intentionally deferred until real usage shows a clear need.

## Privacy-first analytics

Analytics is an interface with a development-only logger, not an external service. It records no network data by default; a future provider must pass privacy review and only receive aggregate/product interaction events needed for validation.

## Deployment choice

The app is static and needs no backend. Cloudflare Pages is the documented first deployment path. Vercel’s free Hobby terms currently restrict commercial use, so it should not be used for a revenue-oriented launch on that tier.
