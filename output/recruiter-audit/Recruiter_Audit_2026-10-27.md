# MainPortfolio recruiter and technical audit

Audited 27 October 2026 (Africa/Johannesburg). Live site: https://jodiabrahamsportfolio.vercel.app/. Local revision: 397d2e9. No portfolio source, CV, projects or deployment settings changed.

## Overall assessment: 71/100 before changes

This is a qualitative recruiter-conversion assessment, not a hiring probability or a Lighthouse score. It is the rounded mean of the three visitor scores below. The site demonstrates strong visual implementation, relevant commercial experience and thoughtful technical writing. It makes visitors work too hard to distinguish commercial delivery, independently built products, prototypes and unverified integrations. Mobile performance and access to demonstrations are the largest practical weaknesses.

Retain the space/art identity. Prioritise faster delivery of the existing content and clearer evidence over a redesign or more projects. No excluded or unfinished project was added during this audit.

## Evidence and scope

- Actual live browser sessions at 1440×1000 and 390×844; mobile means viewport emulation, not a physical phone.
- Read all nine project cards, opened all eight modal case studies, and read the dedicated Possibility Engine page.
- Tested all five main navigation destinations using keyboard activation on desktop/mobile, mobile menu closure, and mobile modal opening, Escape dismissal and focus restoration.
- Visited the five active web demos and the public Food Ordering repository. Exercised a FuelWise calculation, eCommerce product navigation and the cocktail selector. No account creation, login, real payment, CV upload to a third party or contact-message submission.
- HTTP checks of active demo/repository destinations, unavailable demo URLs, robots.txt, sitemap.xml and the live PDF.
- Lighthouse 13.5.0 ran against production in isolated headless Windows Chrome, once per device preset. These are lab measurements, not field Core Web Vitals.
- Some in-app mouse-control commands timed out; keyboard interaction succeeded. These are not classified as proven application defects. The web text-fetch tool also failed to fetch the homepage, while actual browser and HTTP checks succeeded.
- Feature descriptions are claims unless a specific behavior was observed. A reachable page, screenshot, code folder or HTTP 200 does not independently verify authentication security, database persistence, payment processing or end-to-end production reliability.

## Three visitor simulations

Scores use role clarity (20), relevant evidence (30), usability/contact (20), credibility (20), and visual presentation (10). These are reasoned simulations, not tests with human participants.

| Visitor | Score and breakdown | What attracts them | What weakens confidence | Can they find work/contact? |
|---|---|---|---|---|
| A — technical recruiter, 30-second scan | **74/100**: 16+19+17+13+9 | Name, Full Stack title, React/Next.js/TypeScript stack, Cape Town/remote availability, immediate CV actions; professional visual identity | Hero says strong frontend focus and AI evaluation but omits commercial reporting/delivery evidence; project/experience density; three-year claim needs a clear scope against the dated development roles | Yes: View My Work, Experience and Contact anchors work; CV downloadable. Scrolling alone is inefficient: mobile projects begin around y=4,188 and contact around y=14,584 |
| B — senior engineer | **72/100**: 16+23+15+11+7 | TransHumanity editor-history/selection/export details; Crunchtime multi-role delivery workflows; Possibility Engine evaluation denominators, failed acceptance and owner/idempotency discussion | Reported tests have no public receipts; private/missing repos; OpsFlow demo login gate; CV/case-study persistence mismatch; large animation/runtime cost | Yes, especially through the dedicated case study, but several important backend claims cannot be independently verified as a guest |
| C — startup founder | **66/100**: 14+18+17+9+8 | End-to-end ownership language; public FuelWise calculator; SaaS/reporting and payment workflow experience; direct email | Outcomes often describe what was built rather than business effects; no concise delivery example with constraints, ownership boundaries and handover; demo login friction and unavailable projects make readiness harder to judge | Yes, email/contact are easy to find by navigation. Stronger proof of shipping a bounded product independently is needed before trusting broad production-ready claims |

## Website experience

### First impression, typography and hierarchy

The desktop hero is readable, distinctive and coherent: dark background, restrained purple/blue accents, clear title and visible work/contact/CV actions. The mobile hero wraps without horizontal overflow and keeps the CV actions reachable. Four hero actions give useful choices, although View CV is visually much quieter than Download CV.

The main problem is hierarchy rather than styling. About and a large skills inventory precede the projects; four projects are tagged Featured. Experience appears about 6,712px down at desktop size. On mobile, About occupies roughly 3,197px and Projects 6,324px. A recruiter can bypass these with navigation, but a natural scroll hides the strongest commercial evidence for too long.

Skills are organised logically, but the broad inventory does not distinguish regularly used commercial technologies from project exposure. The explanation of the portfolio's Three.js/GSAP implementation is less useful to a first-time recruiter than a direct example of paid delivery. How I Work is clear but generic; tying one stage to a real debugging/testing/release decision would substantiate it.

### Navigation, accessibility and contact

- Desktop and mobile Home/About/Projects/Experience/Contact anchors passed; no missing fragment targets were found.
- Mobile menu closes after navigation. Case-study modal fits at approximately 352px within a 390px viewport; it receives focus on the close control, closes with Escape, and restores focus to Case Study.
- No horizontal overflow on checked homepage and case-study widths; no broken homepage images; no captured homepage warning/error console entries.
- Contact inputs have labels, required attributes and an email input; the empty form is invalid. Direct mailto links are present. Delivery through EmailJS was deliberately not tested because that sends a message.
- One H1 and canonical/description metadata are present. Lighthouse reported 100 accessibility; this does not prove full WCAG compliance, screen-reader quality or all motion behavior.
- Reduced-motion handling exists in CSS/GSAP/astronaut source. It was not dynamically tested with an OS/browser preference change, so reduced-motion behavior remains a manual follow-up.

## Project-by-project credibility

| Project | Live status and observed implementation | Demo/repository result | Claim assessment and best next evidence |
|---|---|---|---|
| **Possibility Engine** | Explicit engineering prototype. Dedicated case study explains Gemini/Ollama/pgvector architecture, 36-question developer-labelled evaluation, precision/recall trade-off and failed answer-quality acceptance. Reports 218 regression, 4 PostgreSQL and 7 browser tests, with fixture/live distinctions | Case-study route works on desktop/mobile. No public app demo or repository offered; page explicitly says internal receipts are unpublished | Strong technical explanation and honest limitations. Metrics/tests are developer-recorded, not independently rerun here. Resolve CV's persistence-unverified statement against later Phase 2M evidence; publish a small redacted receipt and architecture/version date if safe. Do not treat 96% retrieval precision as answer accuracy |
| **OpsFlow** | Public landing page identifies itself as a portfolio SaaS project. View demo/Open dashboard routes to login. Case study describes server-enforced roles, workspace scoping, TipTap persistence and exports | HTTP 200; actual demo journey ends at /login. Repository correctly labelled Private; no public source access claimed | Commercial-style does not mean commissioned/commercial employment. Authenticated workflows and security remain unverified as a guest. Add a read-only seeded demo or short walkthrough with explicit sample-data labels |
| **FuelWise SA** | Public beta. Full-tank calculator accepted 45L and manual R20/L and returned R900. Latest automatic prices became unavailable; manual fallback and freshness labels worked. Saved vehicle/result features require sign-in | HTTP 200; public calculator works. No repository link exposed | Strongest immediately testable independent product. Portfolio case study calls it production-ready, while live product says beta. Label live calculators, beta features, gated alerts/billing and verified backend work separately. A feed outage during this check is a point-in-time observation, not proof of permanent failure |
| **Cocktail Animation Website** | Public Velvet Pour landing page renders. Selecting Violet Breeze updates recipe name, but descriptive recipe remains Margarita text. Placeholder social URLs (#), template contact details and generic Landing Page title remain | HTTP 200; live UI and selector accessible. No repository link | A credible interaction/animation exercise, not evidence of a functioning commercial service. Clearly label concept/demo copy; fix mismatched recipe content and empty links. Do not present template customer counts as real project outcomes |
| **AI Resume Analyzer** | Public authentication screen; initial Signing you in state then login entry. No upload or analysis performed | HTTP 200 at supplied auth URL. No public repository | Authentication, storage, PDF handling and provider-based analysis are stated, but not verified end-to-end. Add a synthetic sample result and explain provider integration versus model engineering. Do not require a recruiter to upload a real CV |
| **LMS SaaS App** | Portfolio honestly disables demo with Temporarily unavailable. Auth/subscriptions/realtime/voice claims remain in card/case-study copy | Stored demo URL returned HTTP 500. No repository link | Availability label is good. Completion/implementation status cannot be verified. Offer dated recording/test evidence or qualify feature claims; do not automatically remove the project without approval |
| **Food Ordering App** | Public Expo repository contains app/components/lib/store folders and 13 commits. README is still the default Welcome to your Expo app; About has no description/site/topics | GitHub HTTP 200 and repository opens. No runnable public mobile demo tested | Cart/search/Appwrite/Google Auth claims are not proven by the landing README. Replace starter documentation with screenshots, setup/env-variable names, feature status and tests; provide a recording/build for review. No credentials should be published |
| **AI Stock Market App** | Portfolio disables demo. Copy claims live prices, alerts, admin tools and sentiment analysis | Stored demo URL returned HTTP 500. No repository link | Treat these as unverified feature claims, not proven live services. Distinguish implemented/offline/demo/incomplete states and provide evidence before promoting it as a production capability |
| **Nike-style eCommerce** | Catalog and Nike Air Max 15 product page render, with sizes, colors, price, Add to Bag control. Footer contains many # placeholder links, Croatia and copied brand copyright | HTTP 200; product navigation works. No repository link | Product browsing is verified. Cart persistence/auth/Stripe checkout were not tested; no purchase attempted. Label concept/storefront demo and payment mode; fix placeholder destinations and add a bounded test-mode walkthrough |

Commercial experience is a separate category: TransHumanity reporting/editor/export work and Crunchtime delivery, payment and realtime workflows are supported by the approved CV and consistent website history. They were not independently verified with employers/private systems. Promote them as specific employment contributions, without recasting OpsFlow, FuelWise or other personal projects as paid client work.

## CV audit

**The live site is updated.** The versioned production PDF, local canonical PDF, approved October source and actual browser download all have SHA-256:

`FC8834564FBE1AC8484195578ED5F0F59B3008E6755723C1EE32BEEFD31EAB6B`

Active homepage hero/nav links and case-study nav point to `/assets/Jodi_Abrahams_CV.pdf?v=fc8834564fbe`. Download attributes specify `Jodi_Abrahams_CV.pdf`. Actual mobile-menu download saved `Jodi_Abrahams_CV (1).pdf` because the canonical name already existed in Downloads; its bytes match. No active older CV filename was found.

View CV has `_blank`/`noreferrer` and the correct URL. It was keyboard-activated, but the in-app browser did not expose a rendered new PDF tab; visual PDF viewer behavior remains **BLOCKED/unverified**, not a claimed success. HTTP download, actual browser download, PDF parsing and content checks passed. Separate hero and case-study download controls were checked by attributes/URL, not each downloaded again.

The document has two pages. TransHumanity is Nov 2025–Apr 2026; freelance is Apr 2026–Present; Securicom is Feb 2022–Mar 2023. These dates match the rendered history.

Two clarity issues need approval, not silent edits:

1. Site says 3 years professional experience; approved CV says 2+ years professional development. Three is compatible with the literal 2+ claim, but the scope/count is unclear: listed development dates through October total roughly two years, while earlier IT support adds separate professional experience. Clarify whether the intended count includes IT support, additional verified work or rounded tenure.
2. CV says real PostgreSQL persistence remains unverified; case study reports later PostgreSQL tests and a persisted live run. Reconcile against actual receipts and date the evidence before changing the CV.

## Technical results

| Check | Exact outcome |
|---|---|
| Production build | PASS, 1,048 modules; 1m 7s. Astronaut chunk 958.06kB minified / 263.22kB gzip triggers >500kB warning |
| Automated tests | PASS, 9/9, 0 failures; includes route behavior, availability labels, metadata and versioned PDF HTTP byte equality |
| Lint | PASS exit status; 0 errors, 5 pre-existing react-hooks/exhaustive-deps warnings: Globe.jsx 71/83, Particles.jsx 92/96/100 |
| TypeScript | No configured typecheck script; predominantly JS/JSX project. No standalone TypeScript pass claimed |
| Live desktop browser | PASS for inspected rendering, all primary anchors and eight case-study modals; mouse automation timeouts occurred, keyboard path worked |
| Live mobile browser | PASS at 390×844 for homepage, navigation, menu closure, modal Escape/focus restoration, case-study layout and CV download |
| Contact delivery | NOT TESTED: no message sent; input semantics and direct-email route inspected |
| PDF browser viewing | BLOCKED in this browser environment; approved content/download verified separately |
| robots.txt / sitemap.xml | Both HTTP 404; not an indexing ban, but missing crawl-discovery assets |

| Lighthouse 13.5.0 | Desktop | Mobile |
|---|---:|---:|
| Performance | 78 | 29 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.3s | 4.8s |
| Largest Contentful Paint | 1.5s | 7.8s |
| Total Blocking Time | 260ms | 5,640ms |
| Cumulative Layout Shift | 0.001 | 0 |
| Speed Index | 2.2s | 8.4s |

Mobile run warning: the test computer CPU was slower than Lighthouse expects and may depress the score. Desktop had no run warnings. Do not generalise these single-run values to all recruiters. Mobile report attributes 20.5s main-thread work (7.66s style/layout, 7.64s script evaluation), estimates 119KiB unused astronaut JS, and flags a Google Fonts render-blocking chain. The LCP element was hero-description text. Animation/runtime cost is a strong optimisation lead, but precise attribution needs profiling; chunk names such as Footer are bundler group names, not proof that the footer component itself caused the work.

Reports: `lighthouse-desktop.report.html/json`, `lighthouse-mobile.report.html/json` in this folder. Lighthouse SEO 100 covers a limited checklist; it does not negate missing sitemaps, weak copy, client-only initial homepage HTML or non-shareable modal detail pages.

## Ranked improvement plan

No confirmed critical outage of the portfolio or CV download was found. These recommendations are not authorisation to redesign, delete, publish or change the approved document.

| Priority | Evidence / affected area | Proposed improvement | Expected benefit | Effort estimate | Verification |
|---|---|---|---|---|---|
| **High** | Mobile performance 29; 7.8s LCP, 5.64s TBT; Hero/AstronautScene/useScrollMotion/global CSS | Profile cold mobile load; render text immediately; defer decorative 3D until after critical content or opt-in on constrained devices; avoid unnecessary animation layout work; optimise font delivery | Faster first impression and usable buttons on modest hardware while retaining the art theme | 1–3 days | Repeat 3 comparable mobile runs, report median and CPU conditions; target LCP ≤2.5s and TBT ≤200ms; test scroll/reduced-motion regression |
| **High** | CV persistence-unverified statement versus case-study Phase 2M passing claims | Review receipts, label evidence version/date, reconcile approved documents only after approval | Removes an avoidable technical credibility conflict | 1–3 hours plus evidence review | Side-by-side CV/page check against dated receipts; no unverified claim promoted |
| **High** | HeroText/About say 3 years; CV 2+ development; employment date basis unclear | Agree a precise scope: software development versus broader IT work; keep wording consistent across hero/about/CV | Recruiter can understand seniority without doing date arithmetic | 1–2 hours | Recompute non-overlapping verified tenure and check all displayed summaries; CV changes need approval |
| **High** | Mobile projects start y≈4,188; experience follows nine projects and How I Work | Add a concise commercial-evidence summary near hero and promote Crunchtime/TransHumanity contributions, FuelWise and one technical case study; keep remaining projects accessible | Strongest evidence appears in the first 30 seconds | 0.5–1 day | Five-second role check and 30-second work/contact task at desktop/mobile; verify excluded projects remain excluded |
| **High** | OpsFlow View demo redirects to login; private repository | Provide read-only seeded demo or 60–90s walkthrough with visible sample-data labels and documented role boundaries | Senior engineers/founders can inspect the work without registration | 0.5–2 days | Fresh logged-out visitor reaches useful evidence within two clicks; ensure demo cannot alter real data |
| **High** | FuelWise public beta/feed unavailable; LMS/stock HTTP 500; broad implemented claims | Add consistent status and evidence labels: live, beta, prototype, unavailable; separate verified features from gated/future integrations | Prevents completeness claims outrunning observable functionality | 0.5–1 day | Compare every claim with public walkthrough/test receipt; test demo health and fallback copy |
| **High** | Food Ordering repo default Expo README and no About description | Replace boilerplate with purpose, ownership, screenshots/video, implementation map, safe setup and known limitations | Makes the one public project repository useful to engineering reviewers | 0.5 day | New reviewer can explain and run the project from README without secrets; document tested flows |
| **Medium** | OpsFlow/FuelWise case-study outcomes are largely feature inventories; commercial details buried | Add one concrete decision, trade-off, failure/debugging example, verification artifact and scoped outcome per priority project; use qualitative evidence where metrics were never measured | Demonstrates independent engineering judgment without invented metrics | 1–2 days | Reviewer can distinguish personal work, team work, trade-offs and results from each short case study |
| **Medium** | Cocktail selector updates title but retains Margarita recipe; eCommerce footer has # links/template brand copy | Correct demo content and placeholder links; clearly label concept/training/sample content; expose payment test-mode boundaries | Avoids small demo defects undermining broader production claims | 0.5–1 day per demo | Click through each visible control/link and confirm relevant changed content; no real payment required |
| **Medium** | Broad skill inventory; frontend/AI focus differs from target full-stack recruiting | Group core commercial stack separately from project exposure, with links to evidence; shorten repeated animation/technology wording | Clearer role match and faster scanning | 2–4 hours | Recruiter identifies frontend/backend/data/testing strengths in under ten seconds |
| **Medium** | 404 robots/sitemap; most project details are modal-only; homepage raw HTML contains empty root | Add crawl assets and canonical shareable pages for priority case studies; consider prerendering primary hiring content; use a recruiter-oriented social preview | Easier sharing and clearer search previews | 0.5–2 days | HTTP200 valid sitemap/robots; direct-refresh case routes; inspect raw HTML metadata/content and social preview |
| **Medium** | Only nine automated tests; contact delivery and browser PDF viewer still unverified | Add a small reusable browser smoke suite for menu, modals, CV actions and responsive layout; separately authorise a test contact message; manually verify normal PDF viewer | Prevents regressions in recruiter-critical paths | 0.5–1 day | CI smoke passes and downloaded PDF hash/filename checked; real contact receipt confirmed only after authorised send |
| **Low** | Five pre-existing hook warnings; missing source map for large JS | Fix warnings in scope, remove unused legacy components if confirmed unused and approved, retain suitable debugging maps | Cleaner maintenance signal and easier performance diagnosis | 2–4 hours | Lint zero warnings, build/tests and interaction checks pass |
| **Low** | Four hero actions; repeated Featured badges; lengthy generic How I Work | Simplify emphasis, reserve Featured for the strongest few examples and attach a real example to the work process | More decisive hierarchy without redesign | 2–4 hours | Desktop/mobile screenshot comparison and a short first-time-user scan |

Suggested order: performance → evidence/CV reconciliation → commercial-first hierarchy → demonstration access → public documentation → remaining polish. Keep all factual changes subject to approval and evidence review.

## Screenshot and raw evidence index

- desktop-home.jpg — live first impression, 1440×1000
- desktop-projects.jpg — live first project row
- desktop-case-study.jpg / case-study-results.jpg — technical case-study page
- mobile-home.jpg / mobile-menu.jpg — live 390×844 homepage and navigation
- mobile-contact.jpg — contact layout
- mobile-case-modal.jpg / mobile-case-study.jpg — modal and dedicated-page layouts
- mobile-projects.jpg — projects navigation capture
- fuelwise-calculator.jpg / fuelwise-calculator.txt — tested manual calculation
- opsflow-demo.jpg / opsflow-demo.txt — login destination from View demo
- live-home.txt / project-case-studies.json / possibility-engine.txt — live rendered content
- http-links.json — endpoint statuses
- live-dom-checks.json / desktop-navigation.json / mobile-navigation.json / console.json — browser observations
- live-cv.pdf / live-cv.txt — retrieved approved PDF and extracted text
- ecommerce.txt / ecommerce-product.txt / cocktail-demo.txt / foody-repository.txt / resume-analyzer-entry.txt — public project evidence

Only audit artifacts under output/recruiter-audit were added; build output was regenerated. No source changes, CV modifications, commits, pushes or deployments were made.
