import{test, Locator} from '@playwright/test'

test('verify the TestCase', async({page}) => {

    await page.goto("https://keycode.info"); 
    // await page.keyboard.press("A");
    // await page.screenshot({path: 'a.png'});

    // await page.keyboard.press('ArrowLeft');
    await page.keyboard.down("Shift");
   await page.keyboard.up("Shift");

    await page.pause();
})