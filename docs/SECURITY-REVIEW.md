# Public repository security review — 8 October 2026

## Scope and evidence

Reviewed all advertised branches/tags and reachable Git objects in the two original public repositories. Each had only `main` and no tags. JobBook had 6 commits and 5 unique blobs; its showcase had 7 commits and 29 unique blobs. Text credential-pattern scanning reported no matches for common provider tokens, private-key headers or long quoted credential assignments. Historical file paths were reviewed for environment files, backups and proprietary application source.

No commercial Flutter source was found in the reachable public history. The product repository contains documentation and branding; the website contains presentation source and existing captures. Intentional public contact details are not credentials. No rotation or history rewrite was performed because no exposed credential was identified.

This was a bounded pattern scan and review, not a guarantee that no secret exists. Binary images are not scanned by text rules. Deleted/unreachable objects, forks, issue attachments, external hosting secrets and private repositories were outside this scan.

## Dependency remediation

The original lockfile reported **23 flagged packages: 1 critical, 21 high and 1 low**. Compatible framework/toolchain updates and non-breaking transitive fixes reduced that to **15 flagged packages: 12 high and 3 moderate**, with no critical findings. Counts are npm's flagged-package counts, including dependency chains, not counts of distinct exploitable bugs.

The updated stack uses Next.js 16.4.0, React/React DOM/RSC 19.3.0, Vite 8.3.4, Vinext 1.0.1, Cloudflare Vite plugin 1.63.0 and Wrangler 4.148.0 with compatible Worker types.

Remaining chains involve `braces`/glob tooling, `fflate`/Satori/Open Graph tooling and `sharp`/Miniflare. A production-only audit still flags `sharp` below 0.35.5. Forced downgrade suggestions and unverified dependency overrides were not applied.

The current Netlify target is a static export with fixed image assets; this repository contains no dynamic image route or user-upload processing. That limits the deployed runtime paths, but does not make the dependency tree advisory-free or establish safety for the alternate server build. Review upstream fixes and validate both builds before removing any retained tooling.

Relevant advisories: [Next.js ImageResponse](https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j), [Vite Windows file-access bypass](https://github.com/advisories/GHSA-fx2h-pf6j-xcff), [sharp/librsvg](https://github.com/advisories/GHSA-wq5f-xc86-pv6w), [braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), [fflate](https://github.com/advisories/GHSA-px8p-9vwx-vf98).

## Retained dependencies and assets

`.openai/hosting.json` is imported by `vite.config.ts`, and both original build paths are retained. JobBook's logo and wordmark have identical SHA-256 hashes, but existing/unknown external filename consumers were not ruled out. Neither file was deleted.

## Validation boundaries

Local lint passed with three existing `no-img-element` warnings. TypeScript, the static Netlify build and the Vinext/Cloudflare build passed during remediation. No Android test or assignment result was fabricated. Public CI validates the website and cannot validate the private commercial app.

The current portfolio and Netlify showcase loaded, and capability switching plus lightbox open/close worked on the deployed showcase. RootTrace's current Cloudflare interface loaded and disclosed Gemini, but its sample diagnosis returned upstream HTTP 503. That failure is documented in its case study.
