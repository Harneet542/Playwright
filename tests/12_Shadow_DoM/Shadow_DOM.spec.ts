import { test, expect, Locator } from '@playwright/test';

test.describe('Shadow handling', () =>{

    const url = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

    test.beforeEach(async({page}) => {

        await page.goto(url);
    })
});

test('locate Shadow DOM and assert visible', async({page}) => {

    const card =  page.getByTestId('card-account-card');
    const email = await page.getByTestId('card-account-email').fill('student@thetestingacademy.com');

});

