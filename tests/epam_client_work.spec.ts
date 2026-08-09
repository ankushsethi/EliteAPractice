import { test, expect } from '@playwright/test';

// Test: Navigate to EPAM website, open Services menu and verify Client Work page
// Note: Selectors used are text-based and may need adjustment depending on the site's DOM.
// This test assumes the 'Explore Our Client Work' link is visible after opening the Services menu.

test('Navigate to EPAM Services and verify Client Work page', async ({ page }) => {
  // 1. Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // 2. Open the "Services" menu in the header
  // Using a text selector which should match the header item. Replace with a more specific selector if needed.
  await page.click('text=Services');

  // 3. Click the "Explore Our Client Work" link
  // This link is expected to be visible after opening Services.
  await page.click('text=Explore Our Client Work');

  // 4. Verify the "Client Work" heading/text is visible on the loaded page
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
