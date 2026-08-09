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
});
