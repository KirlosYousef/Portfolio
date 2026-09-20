import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const primaryRoutes = ['/', '/ai/', '/ios/', '/work/', '/work/receipty/', '/work/spookling/'];

for (const route of primaryRoutes) {
  test(`${route} has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('h1')).toBeVisible();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test('homepage presents equal AI and iOS recruiter paths', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', {
      name: /Senior software engineer building iOS products and reliable AI applications/,
    }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /Explore AI Engineering/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Explore iOS Engineering/ })).toBeVisible();
  await expect(
    page.getByText(/hiring an engineer or looking for a freelance partner/i),
  ).toBeVisible();
  await expect(page.locator('[data-role-id]')).toHaveCount(4);
});

test('specialization pages use their intended project ranking', async ({ page }) => {
  await page.goto('/ai/');
  await expect(page.locator('[data-project-card] h3').allTextContents()).resolves.toEqual([
    'Receipty',
    'Spookling',
    'Revera AI',
    'Plot My Calories',
  ]);

  await page.goto('/ios/');
  await expect(page.locator('[data-project-card] h3').allTextContents()).resolves.toEqual([
    'Sellou',
    'LNER',
    'RaceMe',
    'Revera AI',
  ]);
});

test('AI and iOS paths show the same full experience without cross-promoting the other path', async ({
  page,
}) => {
  await page.goto('/ai/');
  const aiExperience = await page.locator('[data-role-id]').evaluateAll((roles) =>
    roles.map((role) => ({
      id: role.getAttribute('data-role-id'),
      content: role.textContent?.replace(/\s+/g, ' ').trim(),
    })),
  );
  expect(aiExperience).toHaveLength(4);
  await expect(page.locator('a[href="/ios/"]')).toHaveCount(0);

  await page.goto('/ios/');
  const iosExperience = await page.locator('[data-role-id]').evaluateAll((roles) =>
    roles.map((role) => ({
      id: role.getAttribute('data-role-id'),
      content: role.textContent?.replace(/\s+/g, ' ').trim(),
    })),
  );
  expect(iosExperience).toEqual(aiExperience);
  await expect(page.locator('a[href="/ai/"]')).toHaveCount(0);
});

test('work filters preserve one shared project library', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.locator('[data-project-card]:visible')).toHaveCount(8);
  await page.getByRole('button', { name: 'AI engineering' }).click();
  await expect(page.locator('[data-project-card]:visible')).toHaveCount(4);
  await page.getByRole('button', { name: 'iOS engineering' }).click();
  await expect(page.locator('[data-project-card]:visible')).toHaveCount(7);
  await page.getByRole('button', { name: 'All work' }).click();
  await expect(page.locator('[data-project-card]:visible')).toHaveCount(8);
});

test('curated independent products are visible and linked', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.getByRole('heading', { name: 'Smart Quiz' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Focus4' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Amour' })).toBeVisible();
  await expect(page.locator('.product-highlight')).toHaveCount(3);
});

test('mobile navigation opens, closes, and exposes both tracks', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Toggle navigation' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: 'AI', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'iOS', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('mobile reveal motion is disabled', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('transform', 'none');
  await expect(page.locator('[data-reveal]').first()).toHaveCSS('transition-duration', '0s');
});

for (const resume of [
  '/resume/Kirlos_Yousef_AI_Engineer.pdf',
  '/resume/Kirlos_Yousef_Senior_iOS_Engineer.pdf',
]) {
  test(`${resume} is present and downloadable`, async ({ request }) => {
    const response = await request.get(resume);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });
}
