import {test, expect} from '@playwright/test'

test("Navigation to the website", async ({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/")
});


test("BCP - in app.vwo.com two roles", async({browser}) =>{

    let adminContext = await browser.newContext();

    let adminpage = await adminContext.newPage();
    await adminpage.goto("https://app.thetestingacademy.com/playwright/");

    await adminpage.close();
})