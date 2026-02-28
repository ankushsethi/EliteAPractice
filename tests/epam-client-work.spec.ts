import { test, expect } from '@playwright/test';

// Test: Navigate to EPAM website -> Services -> Explore Our Client Work -> Verify Client Work visible
test('EPAM - Explore Our Client Work leads to Client Work page', async ({ page }) => {
  // 1. Navigate to EPAM homepage
  await page.goto('https://www.epam.com');

  // 2. Select "Services" from the header menu
  // Using accessible role-based selector which is robust across markup changes
  await page.getByRole('link', { name: /Services/i }).click();

  // 3. Click the "Explore Our Client Work" link
  // Try role-based lookup first; fallback to text selector if needed
  const exploreLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await exploreLink.first().click();

  // 4. Verify that the "Client Work" text is visible on the page
  // Using a partial text match to be resilient to surrounding text or headings
  await expect(page.getByText(/Client Work/i)).toBeVisible();
});
