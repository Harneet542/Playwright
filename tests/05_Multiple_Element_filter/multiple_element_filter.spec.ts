import { test, expect } from '@playwright/test';

test("Verify multiple elements", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightpanellinktext = await page.locator("a.list-group-item").allInnerTexts();
    console.log(rightpanellinktext.length)


    // for (const link of rightpanellinktext) {

    //     console.log(link);
    // }

    for( const linkText of rightpanellinktext ){

        if (linkText === "My Account"){
            await page.getByText(linkText).first().click();
        }
    }

    await page.pause();
});

