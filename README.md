# ContribPath

**Find where you can actually contribute.** ContribPath analyzes a public GitHub repository against a developer’s current skills and produces an evidence-led path from issue → codebase → tests → contribution.

It is not a PR generator. It never submits PRs or comments, impersonates contributors, executes repository code, or presents AI-generated claims as GitHub facts.

## Free core

The browser-only MVP remains useful at ₹0: repository overview, detected stack, activity signals, up to five recommended issues, skill-fit/gap explanations, likely repository files, tests, contribution rules, a practical contribution plan, and observable blockers. No login, token, database, or paid AI API is required.

## Paid-ready design, without payments

`src/config/features.ts` centralizes product capabilities. The free core is marked `available`; deep issue analysis, advanced codebase mapping, readiness analysis, contributor roadmaps, and higher limits are explicitly `planned`. There is no checkout, account, entitlement, fake payment, or artificial free-tier restriction.

The in-product Deep Analysis preview explains the future value while showing only what deterministic analysis can genuinely establish today. See [MONETIZATION.md](MONETIZATION.md) for hypotheses and validation criteria.

## Architecture

- React, TypeScript, Vite; deployed as static files.
- `src/lib/github.ts`: bounded public GitHub REST reads with in-session caching. It samples 50 recent open issues, filters PRs, and does not clone or execute repositories.
- `src/lib/analysis.ts`: deterministic `AnalysisProvider` baseline. A future local or external provider can implement the same interface without replacing the UI or collection layer.
- `src/analytics/analytics.ts`: provider abstraction. The default makes no network calls; it only logs development events. It does not send URLs, skills, credentials, or personal information.

Unauthenticated GitHub REST requests are generally limited to 60 requests per hour. The app handles rate limits and API failures with a user-facing message. See GitHub’s [rate-limit documentation](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api).

## Run and verify

```bash
npm install
npm run dev
npm test
npm run build
```

No environment variables are required; see [.env.example](.env.example).

## Deployment

This static app can deploy to Cloudflare Pages with build command `npm run build` and output directory `dist`; its Pages limits support static sites on the Free plan. `public/_redirects` provides the SPA fallback. `vercel.json` remains as an optional rewrite configuration, but Vercel’s current Hobby plan is personal/non-commercial only, so it is not appropriate once the product is operated commercially. Verify a platform’s current terms before a revenue launch.

To publish on Cloudflare Pages:

1. Push this folder to a GitHub repository.
2. In Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository; set `npm run build` and `dist`.
4. Deploy and verify the generated `*.pages.dev` URL with a public repository and invalid URL.

## Security and privacy

Repository content is untrusted data, never instructions. The app does not render GitHub Markdown as HTML, access private repositories, accept GitHub tokens, expose environment variables, or send repository content to analytics.

## Limitations and next steps

Recommendations are cautiously heuristic and use a limited issue sample; users still need to read full issue and contributor guidance. The next product step is validation with real contributors: completion, issue selection, repeat analyses, and explicit demand for deeper preparation—not payment integration. See [PRODUCT_DECISIONS.md](PRODUCT_DECISIONS.md) and [ROADMAP.md](ROADMAP.md).
