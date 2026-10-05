import { test, expect, Locator } from '@playwright/test';

test("Verify Web Table elements", async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable.html");

    const firstpart = "//table[@id='customers']/tbody/tr[";
    const secondpart = "]/td[";
    const thirdpart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();

    const col = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= col; j++) {

            const dynamicpath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
            const data = await page.locator(dynamicpath).innerText();

            if (data.includes('Helen Bennett')) {
                const countrypath = `${dynamicpath}/following-sibling::td`;
                const countryText = await page.locator(countrypath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${countryText}`);
            }
        }
    }
});

//table[@id="customers"]/tbody/tr

//table[@id="customers"]/tbody/tr[5]/td[2]


//table[@id="customers"]/tbody/tr[5]/td[2]/following-sibling::td

