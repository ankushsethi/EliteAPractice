import { test, expect } from '@playwright/test';

// Headful test: Launch a visible browser and navigate to Google
// This test runs in headed mode by explicitly setting the launch options

test('Open Google in headful mode and verify title', async ({ browserType }) => {
  // Launch a non-headless (headed) browser instance
  const browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept consent if visible (Google may show a consent dialog)
  const acceptButton = page.locator('button:has-text("I agree")');
  if (await acceptButton.count() > 0) {
    await acceptButton.click();
  }

  // Verify that the page title contains 'Google'
  await expect(page).toHaveTitle(/Google/);

  // Close browser
  await browser.close();
});