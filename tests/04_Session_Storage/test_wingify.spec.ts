import {test, expect} from '@playwright/test'

test.use(
    {
        storageState: './user-session.json'
    
    }
);

test("go to login" , async({page}) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1285643");
    await expect(page).toHaveURL(/#\/dashboard/);

});