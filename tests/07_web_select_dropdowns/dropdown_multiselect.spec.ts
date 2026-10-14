import { test, expect, Locator } from '@playwright/test'

test('verify dropdown', async ({ page }) => {
await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes") 
await page.locator("#rs-multi").click();
await page.getByRole("option", {name:'Mocha', exact:true}).click();
await page.getByRole("option", {name:'JUnit', exact:true}).click();
await page.keyboard.press("Escape")
await page.pause();


});