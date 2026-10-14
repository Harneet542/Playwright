import { test, expect, Locator } from '@playwright/test';

test("Verify right click context menu", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    const target = page.getByTestId('ctx-target');
    await target.click({ button: 'right' });

    const menu = page.locator('ul.context-menu-list');
    await expect(menu).toBeVisible();

    const items = await menu.locator('span').allInnerTexts();
    console.log(items);

    await menu.getByText('Copy', { exact: true }).click();


    await page.pause();

});
