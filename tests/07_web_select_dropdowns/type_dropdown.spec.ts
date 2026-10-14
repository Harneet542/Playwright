import { test, expect, Locator } from '@playwright/test'

test('verify dropdown', async ({ page }) => {
await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes") 
await page.locator()
await page.getByTestId('rs-async-input').click();
await page.getByTestId('rs-async-input').fill("pun");
await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
await page.getByRole('option',{name : 'Pune', exact:true}).click();
});