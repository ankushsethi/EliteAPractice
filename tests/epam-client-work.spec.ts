import { test, expect } from '@playwright/test';

// Test: Verify EPAM "Client Work" page navigation from Services menu
// Steps:
// 1. Navigate to https://www.epam.com/
// 2. Select "Services" from the header menu
// 3. Click the "Explore Our Client Work" link
// 4. Verify that the "Client Work" text is visible on the page

test('EPAM - navigate to Client Work via Services and verify heading', async ({ page }) => {
  // 1. Navigate to homepage
  await page.goto('https://www.epam.com/');

  // Note: EPAM site may present a security/bot verification (Cloudflare)
  // If you encounter the verification page during CI, consider adding
  // logic to wait/retry or to use a test-friendly environment.

  // 2. Click the "Services" menu item in the header
  // Use a visible text selector; adjust selector if the site markup changes
  await page.click('text=Services');

  // 3. Click the "Explore Our Client Work" link
  // This selector targets the link text; adjust if casing/label differs
  await page.click('text=Explore Our Client Work');

  // 4. Verify that the "Client Work" text/heading is visible on the page
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
