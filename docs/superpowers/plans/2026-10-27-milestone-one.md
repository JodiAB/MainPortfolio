# Milestone One Implementation Plan

**Goal:** Improve mobile performance and recruiter clarity within the existing space-themed portfolio, locally only.

**Architecture:** Preserve React/Vite, existing sections, dialogs and CV actions. Optimise critical rendering before altering decorative motion. Keep project evidence separate from professional employment.

**Tech Stack:** React 19, Vite 7, CSS, GSAP, React Three Fiber.

**Spec:** User milestone brief in `C:/Users/Jodi/.codex/attachments/6d2c4da9-e058-496d-9847-eee53d0dc298/Pasted text.txt`; audit in `output/recruiter-audit/Recruiter_Audit_2026-10-27.md`.

## Constraints and decisions
- No deployment, commit, CV changes, excluded projects or changes to separate project applications.
- Preserve all nine projects, dates, keyboard navigation, dialog focus and reduced motion.
- User approved clarifying three years as software development plus IT support; approved PDF stays unchanged.
- Chosen approach: targeted loading/rendering changes and concise evidence additions. A redesign or replacement animation library adds risk without meeting the brief better.
- Compare three sequential local production Lighthouse runs per preset before/after. Live measurements are supplementary, not interchangeable with local measurements.

## Work
- [ ] Record baseline metrics, CPU calibration warning and network/main-thread attribution.
- [ ] Optimise font discovery, decorative rendering and unnecessary offscreen work in Hero, scroll hook and CSS; preserve desktop appearance and mobile space imagery. Validate with screenshots and measurements.
- [ ] Update Hero/About seniority scope, introduce early commercial links, promote FuelWise, retain every section and fix navigation tracking if ordering changes.
- [ ] Add project status/evidence labels and accurate CTA names shared by cards/dialogs; qualify FuelWise beta and gated features; date Possibility Engine evidence without rewriting recorded results.
- [ ] Add crawl assets and full-stack metadata; verify CV hash and document missing LinkedIn source if unavailable.
- [ ] Run build, existing tests, lint, responsive browser checks at 360/390/430/1440, keyboard/modal/CV checks and three comparable after runs per preset.
- [ ] Save screenshots, exact changes, results, outstanding limitations and readiness in output/milestone-1. Do not deploy.
