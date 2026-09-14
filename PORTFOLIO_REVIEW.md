# Portfolio polish and validation — 14 September 2026

The existing dark space identity, astronaut, purple/cyan accents and project data are preserved. Existing uncommitted edits were used as the starting point; the current CV was not modified by this work.

## Changes

- Replaced hover-gated workflow cards with always-visible Stage 1, Stage 2 and Stage 3 content. Reduced card height and removed the canvas reveal dependency from the rendered section.
- Added a stable hero headline, explicit Full Stack Developer/frontend positioning, the six key technologies, professional experience context, and clearly ranked work/contact/CV actions.
- Reworked About into readable cards describing the developer, remote availability, feature ownership and technical approach. Employment details appear in Experience.
- Retained grouped skills, removed unnecessary skill-card animation and avoided percentage ratings.
- Made all eight projects visible as preview cards, prioritised OpsFlow, FuelWise SA, AI Resume Analyzer, LMS SaaS App and Food Ordering App. Four projects are featured. Each card includes category, role, description, key technologies, available live/repository links, Read More and Case Study.
- Shared project links and native dialog behaviour between both modal types. Case studies now also expose existing problem, solution, outcome, architecture, features, challenges and future improvements data.
- Corrected the freelance organisation/date to Independent / Remote, Jan 2020–Present. All six employment date ranges match the supplied timeline. Development experience is expanded; older support/network responsibilities remain available in accessible disclosures.
- Removed the unused testimonial section and generated review data. Removed the obsolete duplicate experience dataset.
- Refined contact copy, labels, spacing, 16px inputs, focus states, submit loading, persistent live-region feedback and direct email fallback. Existing EmailJS service/template integration is preserved.
- Added Home/About/Projects/Experience/Contact navigation, active states, keyboard support, unique section IDs, sticky-header offsets and a skip link. Mobile navigation exposes its expanded state and supports Escape.
- Preserved dynamic © currentYear Jodi Abrahams footer, removed fake legal links from the rendered footer, and corrected WhatsApp to a working wa.me URL.
- Updated title/description metadata and retained the repository's canonical deployment URL, social metadata and existing logo image. Removed keyword stuffing.

## Performance

Nine displayed images were converted to WebP, from 3,730,531 bytes combined to 676,014 bytes (about 82% smaller). Original assets are retained. Project previews use lazy loading, asynchronous decoding and reserved dimensions. The astronaut GLB is unchanged at approximately 2.99 MB; its rendering code is lazy-loaded in a separate bundle, caps device pixel ratio at 1.5, stops continuous rendering offscreen and respects reduced motion. The primary JavaScript bundle is approximately 232 KB before gzip (74 KB gzip); the separate Three.js/astronaut bundle still produces Vite's large-chunk warning.

## Validation

- Existing dependencies were reused; no project dependency install or lockfile change was needed. Prettier was run temporarily via npm exec.
- `npm run build`: passed. Vite warns about the deferred astronaut bundle exceeding 500 KB.
- `npm run lint`: passed with zero errors and five pre-existing hook warnings in unused Globe.jsx and Particles.jsx.
- No test script is defined in package.json; no automated test-suite pass is claimed.
- Browser layout checks at 375, 390, 430, 768, 1024 and 1440 pixels found no horizontal overflow, no duplicate IDs, and all stage descriptions at full opacity with no clipped card contents.
- Visually inspected desktop hero/astronaut, mobile hero/workflow/contact/dialog, and tablet project cards.
- Verified mobile menu open/navigation, dialog initial focus, contained keyboard focus, Escape closing and focus restoration.
- Empty contact submission correctly focuses the required name field and displays native validation. No message was sent.
- Rendered dates, footer and both CV links checked. Observed loaded images had no failures; browser error log was empty during checks.

## Explicit confirmations

- Stage cards work at mobile widths without touch or hover activation; titles and descriptions are always visible. Physical touch-device verification is still recommended.
- No important content requires hover.
- Footer says Jodi Abrahams and uses the current year.
- No fake client testimonials or unsupported numerical outcome metrics remain in rendered content.
- Skills do not use percentage ratings.
- Both rendered CV downloads use `/assets/Jodi_Abrahams_CV_Freelancing.pdf` through the shared CV_PATH constant. This existing current asset is intact; old PDF assets are not referenced by the site.
- Employment dates match the supplied six-role timeline.
- Duplicate section IDs are removed.

## Remaining manual checks

Test actual EmailJS delivery and its network-error feedback with an authorised message, external project/social destinations, CV download in the target browsers, physical iOS/Android touch behaviour, reduced-motion settings, and low-powered-device WebGL performance. This was local implementation and validation; production has not been deployed.

## Files changed

The PDF already appeared modified before this task; it is excluded from the following implementation list.

- [index.html](<C:/Users/Jodi/Desktop/MainPortfolio/index.html>)
- [public/assets/projects/Stockapp.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/Stockapp.webp>)
- [public/assets/projects/food.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/food.webp>)
- [public/assets/projects/homepage.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/homepage.webp>)
- [public/assets/projects/landing.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/landing.webp>)
- [public/assets/projects/nike.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/nike.webp>)
- [public/assets/projects/resume ai.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/resume ai.webp>)
- [public/assets/projects/saas.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/saas.webp>)
- [public/assets/projects/screenshots/dashboard.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/projects/screenshots/dashboard.webp>)
- [public/assets/sky.webp](<C:/Users/Jodi/Desktop/MainPortfolio/public/assets/sky.webp>)
- [src/App.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/App.jsx>)
- [src/components/Alert.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Alert.jsx>)
- [src/components/Astronaut.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Astronaut.jsx>)
- [src/components/AstronautScene.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/AstronautScene.jsx>)
- [src/components/Card.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Card.jsx>)
- [src/components/CaseStudyModal.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/CaseStudyModal.jsx>)
- [src/components/CopyEmailButton.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/CopyEmailButton.jsx>)
- [src/components/FlipWords.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/FlipWords.jsx>)
- [src/components/HeroText.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/HeroText.jsx>)
- [src/components/Modal.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Modal.jsx>)
- [src/components/ParallaxBackground.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/ParallaxBackground.jsx>)
- [src/components/Project.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Project.jsx>)
- [src/components/ProjectDetails.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/ProjectDetails.jsx>)
- [src/components/ProjectLinks.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/ProjectLinks.jsx>)
- [src/components/Skills.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Skills.jsx>)
- [src/components/SmokyButton.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/SmokyButton.jsx>)
- [src/components/Timeline.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/components/Timeline.jsx>)
- [src/constants/index.js](<C:/Users/Jodi/Desktop/MainPortfolio/src/constants/index.js>)
- [src/constants/site.js](<C:/Users/Jodi/Desktop/MainPortfolio/src/constants/site.js>)
- [src/index.css](<C:/Users/Jodi/Desktop/MainPortfolio/src/index.css>)
- [src/sections/About.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/About.jsx>)
- [src/sections/Approach.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Approach.jsx>)
- [src/sections/Contact.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Contact.jsx>)
- [src/sections/Experiences.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Experiences.jsx>)
- [src/sections/Footer.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Footer.jsx>)
- [src/sections/Hero.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Hero.jsx>)
- [src/sections/Navbar.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Navbar.jsx>)
- [src/sections/Projects.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Projects.jsx>)
- [src/sections/ProjectsSection.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/ProjectsSection.jsx>)
- [src/sections/Testimonial.jsx](<C:/Users/Jodi/Desktop/MainPortfolio/src/sections/Testimonial.jsx>) (removed)
