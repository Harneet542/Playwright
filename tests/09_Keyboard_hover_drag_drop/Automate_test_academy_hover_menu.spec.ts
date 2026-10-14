import { test, expect, Locator } from '@playwright/test'

test("Hover only Menu", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Hotel").click(); 

    await expect (page.getByTestId ('hover-output')).toContainClass('submission-output');

   await page.pause();
})