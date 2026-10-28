# Milestone 1 — local implementation and verification

Completed 28 October 2026, Africa/Johannesburg. Measurements and browser observations were collected on 27 October; final HTTP verification completed on 28 October. Base revision: 397d2e9. **Deployment readiness: PASS for approval, with the limitations below. Nothing was committed, pushed or deployed.**

## Results

Three Lighthouse 13.5.0 runs per device before and after, using the production build at http://127.0.0.1:4173/, installed Windows Chrome, identical default simulated mobile throttling / desktop preset and performance, accessibility, best-practices and SEO categories. These are lab results, not field Core Web Vitals or physical-phone measurements.

| Median metric | Mobile before | Mobile after | Desktop before | Desktop after |
|---|---:|---:|---:|---:|
| Performance | 38 | **88** | 88 | **95** |
| Score range | 37–39 | 88–89 | 85–89 | 90–96 |
| LCP | 5.50 s | **3.63 s** | 1.41 s | **1.20 s** |
| Total blocking time | 3,288 ms | **112 ms** | 96 ms | 130 ms |
| JS boot-up cost | 5,141 ms | **441 ms** | 860 ms | 799 ms |
| CLS | 0.00038 | **0** | 0.00123 | 0.000019 |
| Measured transfer size | 3.69 MB | **0.54 MB** | 4.05 MB | 4.17 MB |

All six after-runs scored 100 accessibility, 100 best practices and 100 SEO. Mobile score targets of 70 and 85 and desktop target of 90 were achieved. **Mobile LCP ≤2.5 seconds was not achieved.** Desktop TBT increased by 34 ms and transfer by about 121 KB; earlier project imagery and the retained desktop WebGL presentation still have a cost. These regressions are disclosed rather than hidden by the aggregate score.

Raw reports: `local-before-{mobile,desktop}-{1,2,3}.json`, `local-after-{mobile,desktop}-{1,2,3}.json`. `performance-summary.json` records medians, ranges, CPU benchmarks, main-thread breakdowns and every network request; `summarize.mjs` reproduces the summary. Preliminary live mobile runs are retained as `before-mobile-*.json` but excluded from the comparison because live hosting and local preview are different environments. The preliminary live batch was stopped before running the full local comparison.

### Ranked performance causes

1. **Initial decorative WebGL work — high confidence combined bottleneck.** The original mobile homepage fetched the 958 KB minified astronaut JS chunk plus its model/texture resources and ran continuous 3D animation. The first local run attributed about 1.43 seconds of scripting to that chunk and 5.14 seconds of total script evaluation. Mobile now uses a still captured from the same artwork and loads 3D only on explicit activation. The after-run mobile network list contains no astronaut runtime/model load until activation.
2. **Layout and continuous effects — high confidence cost, no isolated attribution claim.** The first local run recorded 2.26 seconds of style/layout and 1.25 seconds of rendering. Buttons/cards previously animated even offscreen; mobile also created all GSAP scroll triggers. Offscreen effects now pause, mobile retains static neon styling and focus feedback, and scroll-driven GSAP runs on desktop only. GSAP animates the independent translate property instead of an inherited custom property, preserving hover transforms.
3. **Font request chain — directly observed.** A CSS import delayed discovery of the Google stylesheet and font. The first local run estimated 1.35 seconds of blocking stylesheet delay. The identical font is now self-hosted with its SIL licence, preloaded and rendered with font-display: swap. No new font service was introduced.
4. **Remaining critical rendering.** The LCP element is still the hero description, not an image. The site remains client-rendered; initial JS/CSS and text rendering under mobile throttling remain opportunities. Prerendering would be a separate change. Project images already use lazy loading and dimensions. No evidence justified a framework migration, wholesale redesign or speculative third-party removal.

These changes were measured together; the improvement is not an isolated benchmark of each individual optimisation. Local CPU benchmark indices varied (mobile before 900–1339; after 1045.5–1257.5). The original warning and repeat baseline warnings are Lighthouse host-calibration diagnostics, not browser permission failures. No thermal or background-process cause was established. No CPU slowdown multiplier was tuned to inflate scores. After-runs had no run warnings. Treat ranges and the large combined improvement as stronger evidence than any single exact score.

## Exact implementation changes

- `src/sections/Hero.jsx`: mobile/reduced-motion poster, optional astronaut activation and pause control; retains automatic desktop animation for no-preference users.
- `public/assets/astronaut-poster.jpg`, `public/assets/astronaut-attribution.txt`: captured existing artwork and retained CC-BY attribution.
- `public/assets/fonts/funnel-display-latin.woff2`, `public/assets/fonts/OFL.txt`: same self-hosted font and licence.
- `src/index.css`: font-face, poster/evidence styling, paused offscreen effects and reduced mobile animation.
- `src/hooks/useVisibleEffects.js`: IntersectionObserver pauses decorative effects outside the viewport.
- `src/hooks/useScrollMotion.js`: post-paint setup, desktop-only scroll motion, non-inherited translate animation.
- `src/App.jsx`: early commercial highlights; Projects and Experience before About/skills; removes unnecessary top-level MotionConfig wrapper while retaining scene/CSS reduced-motion handling.
- `src/components/CommercialHighlights.jsx`: TransHumanity, Crunchtime and FuelWise summaries linked to existing evidence or calculator.
- `src/components/HeroText.jsx`: Full-Stack Software Developer positioning, commercial work, core stack and user-approved broader three-year scope.
- `src/sections/About.jsx`: distinguishes five-plus hands-on years, three years across development/IT support, and the CV's two-plus professional-development statement.
- `src/sections/Navbar.jsx`: active-section calculation follows the new document order; destinations and accessible controls retained.
- `src/sections/Projects.jsx`: FuelWise first in rendered order, all nine projects preserved, clear independent-project introduction.
- `src/constants/projectEvidence.js`, `src/components/ProjectEvidence.jsx`: dated statuses and observed/unchecked boundaries for all nine projects.
- `src/components/Project.jsx`, `src/components/CaseStudyModal.jsx`, `src/components/ProjectDetails.jsx`: consistent evidence notes on cards and both detail presentations.
- `src/components/ProjectLinks.jsx`: explicit beta/concept/login labels; unavailable and private destinations remain non-navigable.
- `src/constants/index.js`: FuelWise beta/manual fallback and release-gate wording replaces blanket production-ready claims.
- `index.html`: full-stack metadata and font preload; canonical/social URLs retained.
- `projects/possibility-engine/index.html`: font preload and dated distinction between approved CV evidence and developer-recorded Phase 2M results. Historical metrics and failed acceptance are unchanged.
- `public/robots.txt`, `public/sitemap.xml`: deployment-appropriate crawl files for the homepage and dedicated case study.
- `docs/superpowers/plans/2026-10-27-milestone-one.md`: implementation plan.
- `output/milestone-1/`: measurements, screenshots, command logs and this report. Earlier output/tmp artifacts predated this milestone and were not published.

No dependency versions, employment dates, approved PDF bytes or separate project applications changed.

## Recruiter experience

The first screen now identifies the full-stack role, React/Next.js/TypeScript/Node/PostgreSQL stack, and both commercial employers. CV and contact actions remain visible. The next section separates commercial contributions from FuelWise's independent beta. Mobile projects begin approximately 1,750 px into the page at the checked viewport, versus about 4,188 px in the earlier 390px audit; exact positions vary with width. All nine projects remain accessible.

Reassessment uses the original role clarity / relevant evidence / usability-contact / credibility / visual rubric (20/30/20/20/10). These are reasoned assessments, not human-participant research or predictions of hiring outcomes.

| Visitor | Before | After | After breakdown | Reason and remaining limit |
|---|---:|---:|---|---|
| Technical recruiter | 74 | 84 | 19+23+19+15+8 | Immediate role/commercial fit, faster phone experience and explicit seniority scope. The page remains long. |
| Senior engineer | 72 | 80 | 18+24+18+13+7 | Dated evidence and honest status distinctions improve assessment. Private source, gated flows and unpublished receipts remain. |
| Startup founder | 66 | 77 | 18+21+19+11+8 | Commercial examples and a usable calculator appear earlier. No new business outcomes, client references or guest SaaS walkthrough were invented. |

**Overall: 71 → 80/100**, rounded mean. The improvement is principally access, clarity and speed, not new proof that project integrations work.

## Project credibility and evidence

Availability rechecked on 27 October; raw destinations/statuses are in `project-availability.json`.

| Project | Availability | Presentation |
|---|---|---|
| FuelWise SA | HTTP 200 | Public beta; previously observed 45 L × R20 = R900 manual flow; feed outage dated, gated account/billing/alerts unverified |
| Possibility Engine | Local route HTTP 200 | Engineering prototype; offline/fixture and live harness evidence distinguished; failed answer-quality acceptance retained |
| OpsFlow | HTTP 200 | Login required, private source; no claim that guest review verified authenticated workflows |
| Cocktail Animation Website | HTTP 200 | Concept/animation study; sample copy and known content/placeholder limitations |
| AI Resume Analyzer | HTTP 200 at auth route | Login required; no upload or provider analysis performed |
| LMS SaaS App | HTTP 500 | Demo remains disabled; documented functionality is not presented as live verification |
| Food Ordering App | GitHub HTTP 200 | Public source; no runnable mobile build verified |
| AI Stock Market App | HTTP 500 | Demo remains disabled; no live trading service claimed |
| Nike-style eCommerce | HTTP 200 | Storefront concept; observed browsing separated from unchecked cart/auth/payments |

**OpsFlow next step proposed, not built:** a 60–90 second walkthrough is the smallest useful addition. Use only user-approved synthetic workspace/member/report data, label it “sample data,” show dashboard → task/report editing → export, and state role restrictions. Review every frame for real customer information before publication. A read-only seeded workspace is an alternative but requires server-enforced mutation restrictions and is outside this milestone. No synthetic client facts, credentials or recordings were fabricated.

The approved CV and Experience agree on TransHumanity Nov 2025–Apr 2026, Crunchtime Jun 2024–Jun 2025, freelance Apr 2026–Present, internship Apr–Jun 2024 and Securicom Feb 2022–Mar 2023. The broader three-year wording was explicitly approved during this task. Possibility Engine's published Phase 2M evidence is developer-recorded and was not rerun against its private database. The chronology within October was not guessed. **No separate LinkedIn-ready employment-description document was found in the inspected project artifacts; comparison with that missing source remains BLOCKED.** LinkedIn itself was not edited.

## Regression results

| Check | Result / evidence |
|---|---|
| Production build | PASS; `build.txt`. Existing >500 KB astronaut chunk warning remains; mobile does not load it by default. |
| Existing tests | PASS 9/9; `tests.txt`. A sandbox attempt failed with EACCES on temporary localhost ports (`tests-sandbox.txt`); approved rerun with local network access passed. |
| Lint | PASS exit status, zero errors, same five existing Globe/Particles hook warnings; `lint.txt`. No new warnings. |
| Type checking | Not configured; no standalone TypeScript pass claimed. |
| Mobile layout | PASS at 360, 390, 430 × 844; no horizontal overflow or broken loaded images; `responsive.json`, `mobile-*.jpg`. Viewport emulation, not physical devices. |
| Desktop layout | PASS at 1440 × 1000; no horizontal overflow; original space/3D presentation retained; `desktop-home.jpg`, `desktop-projects.jpg`. |
| Navigation | PASS all five primary anchors on desktop/mobile; focus targets correct, mobile menu closes; navigation JSON files. Smooth scroll requires settling between rapid activations. |
| Dialogs | PASS all eight case-study modals on mobile; desktop FuelWise modal checked; Escape restores trigger focus. `modal-checks.json`, modal screenshots. |
| Mobile 3D control | PASS: initial zero canvases, activation creates canvas, pause removes canvas; keyboard control and aria-pressed checked. |
| Reduced motion | Code paths preserved/reviewed. Dynamic OS-preference switching and full screen-reader audit NOT TESTED. |
| Console | PASS: no captured warning/error entries in inspected desktop/mobile sessions; `console.json`. |
| Contact | PASS labels, required fields, email type, mailto destination and fragment destinations. No message sent; delivery NOT TESTED. |
| CV bytes | PASS: source, canonical asset, actual browser download and both HTTP URL variants match SHA-256 below. |
| CV viewing | PASS: actual local View CV new tab renders the two-page document; live existing PDF tab also renders. `local-cv-view.jpg`, `live-cv-view.jpg`. Direct automation-created PDF tab was blank; normal new tab appeared later. |
| CV downloading | PASS actual mobile hero activation saved `C:/Users/Jodi/Downloads/Jodi_Abrahams_CV (2).pdf`; suffix is browser duplicate-name handling. Download attribute remains `Jodi_Abrahams_CV.pdf`. |
| Crawl assets | PASS HTTP 200 with text/plain and text/xml respectively; `endpoints.json`. Sitemap lists only the two canonical pages. |
| Lighthouse accessibility / SEO | PASS 100 across all after-runs; limited automated audits, not full compliance or indexing guarantees. |

Approved PDF SHA-256: `FC8834564FBE1AC8484195578ED5F0F59B3008E6755723C1EE32BEEFD31EAB6B` (72,812 bytes). Source: `C:/Users/Jodi/Downloads/Jodi_Abrahams_Updated_CV_October_2026.pdf`. Active asset: `/assets/Jodi_Abrahams_CV.pdf?v=fc8834564fbe`. Both versioned and unversioned local HTTP paths return the identical PDF. All active controls retain the shared constants.

## Remaining work and deployment decision

The local milestone is ready for review and deployment approval. **Do not interpret this as approval to deploy.** The live site still has the earlier portfolio implementation; the CV on live already matches the approved document.

- Mobile LCP remains 3.63 s: investigate prerendered hiring content / further critical JS reduction in a later milestone, preserving measured visual quality.
- Verify missing LinkedIn-ready descriptions when supplied; no invented comparison.
- Provide approved OpsFlow walkthrough/sample-data evidence; fix the separate demo applications in their own repositories if desired.
- The two failing external demos remain unavailable and disabled. Authentication, payments, private database receipts and contact delivery were not newly verified.
- Five legacy lint warnings and the optional desktop 3D chunk warning remain.
- An HTTP verification attempt was blocked by an account-usage-limit failure in automatic approval review. It was rerun successfully after the user resumed on 28 October; no restriction was bypassed.

No commits, pushes, infrastructure changes or deployments were performed.
