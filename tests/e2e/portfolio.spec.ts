import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const primaryRoutes = ['/', '/work/', '/work/spookling/', '/work/raceme/'];

for (const route of primaryRoutes) {
  test(`${route} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('h1')).toBeVisible();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('primary recruiter journey reaches work and a case study', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Senior iOS Engineer/ })).toBeVisible();
  await page.getByRole('link', { name: /See all 10 selected products/ }).click();
  await expect(page).toHaveURL(/\/work\/$/);
  await page.getByRole('link', { name: /Read the Spookling case study/ }).click();
  await expect(page).toHaveURL(/\/work\/spookling\/$/);
  await expect(page.getByRole('heading', { name: /Spookling/ })).toBeVisible();
});

test('curated independent products are visible and linked', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.getByRole('heading', { name: 'Smart Quiz' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Focus4' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Amour' })).toBeVisible();
  await expect(page.locator('.product-highlight')).toHaveCount(3);
});

test('mobile navigation opens, closes, and remains keyboard accessible', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Toggle navigation' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('scrolling stays direct and mobile reveal motion is disabled', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('transform', 'none');
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('transition-duration', '0s');
});

test('resume is present and downloadable', async ({ request }) => {
  const response = await request.get('/resume/Kirlos_Yousef_Senior_iOS_Engineer.pdf');
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');
});
