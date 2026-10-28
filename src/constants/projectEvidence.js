// Public-review observations dated 27 October 2026; not an end-to-end certification.
export const projectEvidence = {
  "Possibility Engine": { status: "Engineering prototype", note: "October 2026 developer-recorded evaluation; fixture browser tests and a separate live harness run. Answer-quality acceptance failed. No public application demo." },
  "OpsFlow": { status: "Portfolio SaaS · Login required", label: "Open app · Login required", note: "Public landing page; dashboard requires an account. Source is private. Authenticated workflows are documented below, not independently verified as a guest." },
  "FuelWise SA": { status: "Public beta", label: "Try public beta", note: "Manual calculator verified: 45 L × R20 = R900. Automatic price feed was unavailable during the 27 October 2026 review. Account, billing and alerts were not verified end to end." },
  "Cocktail Animation Website": { status: "Concept demo", label: "View concept", note: "Animation and interaction study using sample business copy. Recipe text and placeholder links have known limitations; not a commissioned hospitality product." },
  "AI Resume Analyzer": { status: "Prototype · Login required", label: "Open app · Login required", note: "Login screen is reachable. Upload and provider-based analysis were not verified in this review; no recruiter CV upload is required to read the case study." },
  "LMS SaaS App": { status: "Demo unavailable", note: "Deployment returned HTTP 500 on 27 October 2026. Descriptions document project implementation, not currently verified live functionality." },
  "Food Ordering App": { status: "Mobile project · Source available", note: "Public Expo repository is available. No public mobile build was tested; authentication, cart and backend flows remain unverified in this review." },
  "AI Stock Market App": { status: "Demo unavailable", note: "Deployment returned HTTP 500 on 27 October 2026. Live prices, alerts and integrations are not currently verified; this is not a live trading service." },
  "Nike-style eCommerce": { status: "Storefront concept", label: "View storefront concept", note: "Catalog and product browsing verified. Authentication, cart persistence and payment mode were not verified; no purchase was attempted. Includes sample brand content." },
};
