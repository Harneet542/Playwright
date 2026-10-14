import { test, expect } from '@playwright/test';

test.describe('SVG Elements', () => {

    const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!");
        await page.goto(URL);
    });

    test('practice svg', async ({ page }) => {

        const allshapes = await page.locator(
            '//div[contains(@class,"svg-frame")]//*[name()="svg" and @id="shapes-svg"]/*[@class="shape"]'
        ).all();

        for (const shape of allshapes) {

            await shape.click();

            const output = await page.locator("#shapes-output").innerText();

            console.log(output);
        }

    });

});