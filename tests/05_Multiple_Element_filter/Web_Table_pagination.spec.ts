import { test, expect, Locator } from '@playwright/test'

test("verify the element from pagination", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name: string = 'Priya Kapoor';
    let row;
    while (true) {

        row = page.locator('#employees-tbody tr').filter({ has: page.getByText(name, { exact: true }) });

        if (await row.count()) {
            break;
        }
        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) {
            throw new Error("row not found!")
        }
        await next.click();
    }
    
    const foundName = await row.locator('td[data-col="name"]').innerText();
    const email = await row.locator('td[data-col="email"]').innerText();
    const Country = await row.locator("td[data-col='country']").innerText();
    console.log(foundName, email, Country)

   
});
