import { defineConfig } from '@playwright/test';
export default defineConfig({
 testDir: '.', testMatch: 'recruiter-browser.spec.mjs',
 timeout: 45000, retries: 0, workers: 1, reporter: 'list',
 use: { browserName: 'chromium', headless: true, baseURL: 'http://127.0.0.1:4173' },
 webServer: {command:'npm run preview -- --host 127.0.0.1 --port 4173 --strictPort',url:'http://127.0.0.1:4173',timeout:30000,reuseExistingServer:false}
});