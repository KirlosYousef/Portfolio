import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4322';

// The site picks a "full" or "lite" effects tier per device (see BaseLayout).
// A localStorage override pins the tier for a test project.
const tier = (fx: 'full' | 'lite') => ({
  storageState: {
    cookies: [],
    origins: [{ origin: baseURL, localStorage: [{ name: 'fx', value: fx }] }],
  },
});

// CI's Linux WebKit renders in software (no GPU) and cannot be told apart from a real
// Safari, so CI declares it as a low-power device. Locally WebKit runs on the GPU.
const softwareWebKit = process.env.CI ? tier('lite') : {};

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 2 } : {}),
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // The same suite with page transitions and every effect pinned on.
    { name: 'chromium-full', use: { ...devices['Desktop Chrome'], ...tier('full') } },
    { name: 'webkit', use: { ...devices['Desktop Safari'], ...softwareWebKit } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'], ...softwareWebKit } },
  ],
  webServer: {
    command: 'python3 -m http.server 4322 --bind 127.0.0.1 --directory dist',
    port: 4322,
    reuseExistingServer: !process.env.CI,
  },
});
