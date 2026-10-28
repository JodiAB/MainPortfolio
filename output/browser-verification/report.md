# CV deployment readiness verification — 26 October 2026

## Result: BLOCKED

Production-preview desktop/mobile navigation and actual browser download passed. Ordinary Windows Chrome PDF viewing remains unverified; no deployment, commit, live infrastructure changes, source edits or PDF edits were made in this verification turn.

## Original failure and diagnosis

- Original target: http://127.0.0.1:5173/. Initial browser error was net::ERR_CONNECTION_REFUSED before the local server was started. This is a connection failure, not a React error or missing browser executable.
- After startup, the old tab held the browser-generated data:text/html connection-error document. Reload/goto was rejected by Browser Use URL policy on that document. No policy was disabled or bypassed.
- This turn, ordinary Windows HTTP returned 200 for port 5173. Attempting strict-port startup reported port 5173 already in use. A restricted-shell HTTP probe instead reported socket access forbidden; that sandbox-specific result is distinct from server availability.
- A fresh IAB tab navigated successfully to port 5173 but rendered blank. Its precise development-server cause was not established. The production build on http://127.0.0.1:4173/ rendered successfully using the same browser. No application changes were needed for preview verification.
- Browser and supported Playwright control were available and used for actual clicks, DOM observations, screenshots and download events.
- Native Windows Chrome observation first timed out. A retry was rejected by automatic approval review because the selected existing Chrome window displayed LinkedIn and could expose unrelated private content. An isolated Chrome browser session was unavailable. No rejected access was worked around.

## Browser evidence

- PASS: homepage and hero View CV / Download CV actions render in production preview.
- PASS: desktop viewport 1440x1000; About, Projects, Experience, Contact and Home clicked successfully.
- PASS: mobile viewport 390x844; all five navigation links clicked successfully, menu closes after selection. A transient automation targeting failure during scroll animation was resolved by fresh observation and retry after navigation settled.
- PASS: no horizontal overflow at either size; all observed images loaded; no captured warning/error console entries on preview.
- PASS: internal fragment destinations all exist; existing nine-test suite validates the case-study route.
- PASS: all three rendered CV anchors point to /assets/Jodi_Abrahams_CV.pdf?v=fc8834564fbe. Both download anchors specify Jodi_Abrahams_CV.pdf.
- PASS: clicking Download CV produced C:/Users/Jodi/Downloads/Jodi_Abrahams_CV.pdf. Its SHA-256 matches source and canonical public asset.
- BLOCKED: View CV was clicked; the IAB did not expose a rendered PDF. Direct PDF navigation produced a blank dark viewer surface. PDF parser/render validation is not claimed as successful browser PDF viewing.
- External project/social destinations were inventoried, not exhaustively navigated or certified. Contact submission was not exercised.
- Screenshots: desktop.jpg, mobile.jpg, mobile-menu.jpg in this directory. Mobile is a browser viewport check, not a physical phone test.

## Approved document and content

Source: C:/Users/Jodi/Downloads/Jodi_Abrahams_Updated_CV_October_2026.pdf

Canonical: C:/Users/Jodi/Desktop/MainPortfolio/public/assets/Jodi_Abrahams_CV.pdf

SHA-256 (source, public file, browser download): FC8834564FBE1AC8484195578ED5F0F59B3008E6755723C1EE32BEEFD31EAB6B

Two pages. Document text extracted again and compared with rendered Experience section:

| Role | Dates |
| --- | --- |
| Freelance Full-Stack Software Developer | Apr 2026–Present |
| Contract Full-Stack Developer, TransHumanity | Nov 2025–Apr 2026 |
| Full-Stack Developer, Crunchtime Deliveries | Jun 2024–Jun 2025 |
| Web Developer Intern, Life Choices Studio | Apr 2024–Jun 2024 |
| Support Engineer, Securicom | Feb 2022–Mar 2023 |
| Junior Network Technician (Volunteer), CPUT | Dec 2017–Jan 2019 |

February refers to Securicom's start date, not the TransHumanity end date. Approved PDF remains unchanged. No active CV anchor serves an older filename.

## Fresh checks

- PASS npm run build (existing large AstronautScene bundle warning).
- PASS npm test: 9/9, including HTTP application/pdf response and byte equality for versioned CV.
- PASS npm run lint: zero errors, five pre-existing react-hooks/exhaustive-deps warnings (Globe.jsx:71,83; Particles.jsx:92,96,100). Both files have no diff from HEAD; no new warnings introduced.
- PASS git diff --check (informational LF/CRLF warning only).
- No TypeScript checking script is configured; project uses JavaScript/JSX.

## Changes this turn and next action

Only this report and three screenshots were added under output/browser-verification; build output was regenerated. Existing seven CV-update modifications from the previous turn remain unchanged.

To finish: open a dedicated local-portfolio tab in ordinary Chrome (or authorize selecting the existing Chrome window) and verify PDF display there, including narrow viewport viewing. Deployment readiness remains BLOCKED until this required verification is complete. Deployment requires separate approval.
