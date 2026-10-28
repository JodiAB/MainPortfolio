# Controlled deployment — BLOCKED

28 October 2026. No commit, push or deployment performed.

- Repository: https://github.com/JodiAB/MainPortfolio.git
- Branch: main
- Local and remote base: 397d2e9047174c1279beb9fa92f9e528a4178248
- Intended production URL: https://jodiabrahamsportfolio.vercel.app/
- Release manifest: release-manifest.json, 25 reviewed application/asset files. Local reports, tmp, plan docs, dependencies and generated dist excluded from the proposed source release.
- Common secret-pattern scan: no findings in those 25 files. This is a scoped check, not a guarantee against every possible secret format.
- Production build: PASS, 35.82 seconds; existing optional astronaut chunk-size warning remains. See build.txt.
- Automated tests: PASS 9/9. See tests.txt.
- Approved CV unchanged: SHA-256 FC8834564FBE1AC8484195578ED5F0F59B3008E6755723C1EE32BEEFD31EAB6B.

## Deployment gate failure

GitHub reports six successful Vercel project checks for the current commit under jodiabs-projects: main-portfolio, main-portfolio-h959, main-portfolio-6kv9, main-portfolio-q3m7, main-portfolio-koa1 and main-portfolio-gq6t. A push could trigger multiple deployments. The project owning the intended production domain must be confirmed before release.

The Vercel connector lists no projects/teams in its default scope. An explicit project lookup under jodiabs-projects returns 403 (team access missing), identifying team_cvNW4OKjKmd778v7TJns9z9z. The recommended authorize_team_access operation returns 404 Team not found using both the supplied team ID and known slug, so no consent link could be generated. No security settings were changed or bypassed.

Required next action: make the intended jodiabs-projects team accessible to the Vercel connection, or provide an authenticated Vercel dashboard session from which the domain-owning project can be confirmed. Do not blindly push main while six deployment integrations are attached.

Production browser verification and production Lighthouse comparison are NOT RUN because no deployment was made. Local Milestone 1 results remain in output/milestone-1/Milestone_1_Report.md.
