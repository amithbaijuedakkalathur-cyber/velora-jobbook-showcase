# Validation and release boundaries

## Automated checks

Use `npm ci`, then run lint, TypeScript and both supported build paths before a dependency/tooling release. Pull-request CI runs the static Netlify build with `NETLIFY=true`, because that is the current public hosting target. The Vinext build is a distinct compatibility check when updating preview tooling.

No unit, browser or commercial Flutter test suite is included here. Do not describe lint or a build as application tests.

## Manual website checks

Before deployment, verify capability tabs update their content, workflow buttons select the expected step, screenshot buttons open the matching capture, Escape/backdrop/close dismiss the lightbox, navigation anchors work, and a narrow viewport remains readable. Confirm screenshots and the Open Graph image load from the exported site.

## Android app checks

These belong in the private product repository: job lifecycle, partial settlements, invoice finalization, signatures, PDF export, database migrations and backup/restore integrity. Publish results only with dated evidence from that repository or an approved release report.

## Asset evidence

The existing Jobs, Dashboard and Money captures were visually reviewed during cleanup on 8 October 2026. They are supplied product captures, not newly generated screenshots. Their records and totals differ between captures, so they cannot establish financial consistency. No invoice/report screenshot or product walkthrough was fabricated.
