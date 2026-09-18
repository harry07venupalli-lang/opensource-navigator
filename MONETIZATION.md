# Monetization and validation

## Product

ContribPath turns a public GitHub repository and a developer’s skills into an evidence-led contribution path: realistic issue opportunities, likely code locations, concepts, tests, rules, and blockers. It does not generate PRs or make acceptance promises.

## Target users

- Students and self-taught developers entering open source
- Junior developers building public GitHub credibility
- Developers moving to a new language or stack
- Developers who have found a project but cannot identify a realistic first contribution

## Free value

The free product is useful by itself: public repository overview, limited issue recommendations, basic skill matching, evidence-backed fit rationale, likely files where confidently detected, tests/rules, blockers, and activity signals.

## Potential paid value

Deeper analysis could provide substantially more preparation: wider codebase/dependency context, complete test and edge-case planning, careful contribution-readiness checks, tailored learning gaps, and an incremental contributor roadmap. These are additive depth and repeated-use value—not a paywall around basic issue discovery.

## Possible monetization models

### A — Freemium

Keep the free contribution path and charge for deep analysis. This is simple to explain, but only works if the deeper output is distinctly useful.

### B — Usage-based

Offer basic analyses free and charge per deep analysis. This reduces subscription friction but requires users to understand value before purchase.

### C — One-time purchase

Sell a detailed issue preparation package or contributor roadmap. This aligns with a task-oriented use case but may reduce predictable revenue.

### D — Developer career product

Eventually expand into contributor progression and portfolio-building. It has greater scope and retention potential, but should not distract from solving first-contribution uncertainty.

No model is preselected. User behavior and qualitative interviews should determine the choice.

## What to validate first

The core question is: **do people repeatedly use this and want deeper contribution guidance?** Track completion rate, issue click-through, contribution-plan views, repeat analyses, deep-analysis interest, return visits to another repository, attempted recommended issues, and qualitative feedback. The current `src/analytics/analytics.ts` has no network transport and deliberately does not transmit repository URLs, skills, credentials, or personal information.

## Monetization trigger

Do not charge because the product is technically capable. Charge only after a meaningful pattern of completed analyses, repeat use, explicit deep-analysis interest, interviews confirming that the saved research/preparation time is valuable, and a testable premium capability that remains trustworthy.
