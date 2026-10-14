import { test, expect, Locator } from '@playwright/test'

test('verify dropdown', async ({ page }) => { 

await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")

await page.getByTestId('lang-trigger').click();
await page.getByRole("option", {name:"Java", exact: true}).click();

await page.pause();
});