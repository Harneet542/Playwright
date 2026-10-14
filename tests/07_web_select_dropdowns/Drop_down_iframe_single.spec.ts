import { test, expect, Locator } from '@playwright/test'

test('verify dropdown', async ({ page }) => {

    // The site's server hangs ~30s on its JS/CSS/image files, so load only the HTML

    await page.goto("https://the-internet.herokuapp.com/dropdown", {
        waitUntil: "domcontentloaded"
    })

    await page.locator("#dropdown").click();
    await page.selectOption('#dropdown', "Option 1");
    await expect(page.locator('#dropdown')).toHaveValue('1');

  
});