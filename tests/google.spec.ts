import { test, expect } from '@playwright/test';

// Test: Navigate to Google homepage
// This test opens the browser and navigates to https://www.google.com
// It verifies that the Google search input is visible on the page.

test('Navigate to Google homepage', async ({ page }) => {
  // 1. Go to Google
  await page.goto('https://www.google.com');

  // 2. Wait for the search input to be visible as a basic verification
  // The typical selector for Google search input is 'input[name="q"]'
  const searchInput = page.locator('input[name="q"]');
  await expect(searchInput).toBeVisible();

  // Optionally, ensure the page title contains 'Google'
  await expect(page).toHaveTitle(/Google/);

  // 3. Add a simple search to fully exercise the page
  await searchInput.fill('Playwright');
  await Promise.all([
    page.waitForNavigation(),
    page.keyboard.press('Enter')
  ]);

  // 4. Verify that search results are shown by checking a result stats or results container
  const results = page.locator('#search');
  await expect(results).toBeVisible();
});
