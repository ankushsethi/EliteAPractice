import { test, expect } from '@playwright/test';

// Test: Navigate EPAM homepage -> Services -> Explore Our Client Work -> Verify "Client Work" is visible
// Notes:
// - Uses text-based selectors which are resilient to minor DOM changes.
// - If cookie banner appears, the script accepts it before interacting with page.
// - Keep the test in a single browser instance as required by the workflow.

test('EPAM: Services -> Explore Our Client Work - Verify Client Work text', async ({ page }) => {
  // 1. Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // 2. Accept cookie banner if present to avoid overlays blocking clicks
  const acceptBtn = page.locator('button:has-text("Accept All")');
  if (await acceptBtn.count() > 0) {
    await acceptBtn.first().click();
  }

  // 3. Click the "Services" item in the header menu
  // Using a text selector which maps to the visible link/button in the header.
  await page.click('text=Services');

  // 4. Click the "Explore Our Client Work" link on the Services page
  // This navigates to the client work listing.
  await page.click('text=Explore Our Client Work');

  // 5. Verify that the "Client Work" text is visible on the page
  // Use a tolerant expectation to avoid strict case-sensitivity issues.
  await expect(page.getByText(/Client Work/i)).toBeVisible();
});
