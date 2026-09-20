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

test('phone layouts fit compact widths and retain usable navigation and filters', async ({
  page,
}, testInfo) => {
  const routes = [
    '/',
    '/ai/',
    '/ios/',
    '/work/',
    '/work/receipty/',
    '/work/spookling/',
    '/work/sellou/',
  ];

  for (const width of [320, 375, 430]) {
    await page.setViewportSize({ width, height: 844 });

    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      const layout = await page.evaluate(() => {
        const viewport = document.documentElement.clientWidth;
        const offenders = Array.from(document.querySelectorAll<HTMLElement>('body *'))
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              element: `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}${
                typeof element.className === 'string' && element.className
                  ? `.${element.className.trim().replace(/\s+/g, '.')}`
                  : ''
              }`,
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
            };
          })
          .filter((element) => element.right > viewport + 1)
          .sort((a, b) => b.right - a.right)
          .slice(0, 8);
        return {
          viewport,
          content: document.documentElement.scrollWidth,
          offenders,
        };
      });
      if (width === 320) {
        await page.screenshot({
          path: testInfo.outputPath(`phone-${route.replaceAll('/', '-') || 'home'}-${width}.png`),
        });
      }
      expect(
        layout.content,
        `${route} overflows at ${width}px: ${JSON.stringify(layout.offenders)}`,
      ).toBeLessThanOrEqual(layout.viewport);
    }

    await page.goto('/work/');
    const filters = page.locator('[data-work-filter]');
    for (const filter of await filters.all()) {
      expect(
        await filter.evaluate((button) => button.getBoundingClientRect().height),
      ).toBeGreaterThanOrEqual(44);
    }
    await page.getByRole('button', { name: 'AI engineering' }).click();
    await expect(page.locator('[data-project-card]:visible')).toHaveCount(4);
    await expect(page.locator('[data-filter-status]')).toContainText('Showing 4 AI case studies');

    for (const [route, oppositeTrack] of [
      ['/ai/', '/ios/'],
      ['/ios/', '/ai/'],
    ] as const) {
      await page.goto(route);
      const menu = page.getByRole('button', { name: 'Toggle navigation' });
      expect(
        await menu.evaluate((button) => button.getBoundingClientRect().height),
      ).toBeGreaterThanOrEqual(44);
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await expect(page.getByRole('link', { name: 'Work', exact: true })).toBeVisible();
      await expect(page.locator(`a[href="${oppositeTrack}"]`)).toHaveCount(0);
      await page.getByRole('link', { name: 'Work', exact: true }).click();
      await expect(page).toHaveURL(/\/work\/$/);
      await expect(page.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    }

    const footerTargets = await page
      .locator('.site-footer nav a')
      .evaluateAll((links) => links.map((link) => link.getBoundingClientRect().height));
    expect(footerTargets.every((height) => height >= 44)).toBe(true);
  }
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
