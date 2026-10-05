import { test, expect, Locator } from '@playwright/test';

test("Verify Web Table Employee Directory", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const firstpart = "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const secondpart = "]/td["
    const thirdpart = "]"

    const rows = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const col = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= col; j++) {

            const dynamicpath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
            const data = await page.locator(dynamicpath).innerText();

            if (data.includes('Kabir.Khan')) {

                const checkboxPath =
                    `${dynamicpath}/preceding-sibling::td[1]//input[@type='checkbox']`;

                await page.locator(checkboxPath).check();

                await page.pause();

            }
        }
    }

});

//table[@aria-label="Employee Management System table"]/tbody/tr

//table[@aria-label="Employee Management System table"]/tbody/tr[5]/td[2]/preceding-sibling::td
