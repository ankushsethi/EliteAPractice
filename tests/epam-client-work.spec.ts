import { test, expect } from '@playwright/test';

// Test: Navigate to EPAM site -> Services -> Explore Our Client Work -> verify "Client Work" text
test('EPAM: Services -> Explore Our Client Work shows Client Work text', async ({ page }) => {
  // 1. Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');
  // Wait for network to be idle to ensure page assets load
  await page.waitForLoadState('networkidle');

  // 2. Select/Click the "Services" option from the header menu
  // Using a visible text selector to target the header item. If this is a hover menu, click should still work
  await page.click('text=Services');
  await page.waitForLoadState('networkidle');

  // 3. Click the "Explore Our Client Work" link
  // Use a text locator to find the link. If it appears inside a submenu, Playwright will resolve it when visible.
  await page.click('text=Explore Our Client Work');
  // Wait for navigation to complete after clicking the link
  await page.waitForLoadState('networkidle');

  // 4. Verify that the "Client Work" text is visible on the page
  const clientWorkLocator = page.locator('text=Client Work');
  await expect(clientWorkLocator).toBeVisible();
});
