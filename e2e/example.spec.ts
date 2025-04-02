import { test, expect } from '@playwright/test';

test('Aria Snapshot Bug', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect.soft(page.getByRole('navigation')).toMatchAriaSnapshot({
    name: 'navigation.aria.yml',
    timeout: 0
  });
});
