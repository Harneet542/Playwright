import { test, expect } from '@playwright/test'

test("Verify the webelement values", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: ' Login ' }).click();

    await page.locator('//a[contains(@href,"viewPimModule")]').click();
    await page.getByRole('button', { name: ' Add ' }).click();

    await page.getByRole('textbox', { name: 'First Name' }).fill("iphone15");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("promax");
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForURL('**/viewPersonalDetails/**');

    // go back to PIM page
    await page.locator('//a[contains(@href,"viewPimModule")]').click();
    await page.locator('div.oxd-table-card').first().waitFor();

    // while loop

    let name: string = "iphone15"
    let row;

    while (true) {
        row = page.locator('div.oxd-table-card').filter({ has: page.getByText(name, { exact: true }) });
        if (await row.count()) {
            break;
        }
        const next = page.locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)');


        if (await next.count() === 0) {
            throw new Error("row not found!")
        }
        await next.click();
        await page.locator('div.oxd-table-card').first().waitFor();
    }
    console.log(await row.first().locator('div.oxd-table-cell').allInnerTexts());

    await row.first().locator('//button[i[@class="oxd-icon bi-trash"]]').click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

await expect(page.getByText('Successfully Deleted')).toBeVisible();

    await page.pause();
})

