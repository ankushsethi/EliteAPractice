import { test, expect } from '@playwright/test';

// Test: Navigate to EPAM and verify Client Work page via Services menu
test('EPAM: navigate to Client Work via Services', async ({ page }) => {
  // 1. Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');
  // Ensure page has loaded network requests
  await page.waitForLoadState('networkidle');

  // 2. Click the 'Services' link in the header menu
  // Using text selector; adjust to a more specific selector if needed
  await page.click('text=Services');

  // 3. Click the 'Explore Our Client Work' link
  // This opens the Client Work page/section
  await page.click('text=Explore Our Client Work');

  // 4. Verify the 'Client Work' text is visible on the page
  // Using a text locator to assert visibility
  const clientWorkLocator = page.locator('text=Client Work');
  await expect(clientWorkLocator).toBeVisible();
});
