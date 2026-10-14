import {test, expect, Locator} from '@playwright/test';

test.describe("selectro hub", () => {

    const url = 'https://selectorshub.com/xpath-practice-page/';

    test.beforeEach(async ({page}) => {

        await page.goto(url)
    })

test("verify shadow Dom", async({page}) => {
 const name = await page.locator('#kils').fill("test");
 const pizza = await page.locator('#pizza').fill('Margertta');

 // move the concept to closed shadow Dom

 await page.keyboard.press('Tab')
 await page.keyboard.type('tester')

 // move to the password feild 
 await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')
  await page.keyboard.type('password')


await page.pause();
});
});
