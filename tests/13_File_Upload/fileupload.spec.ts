import {test, expect, Locator} from '@playwright/test'

import path from 'path'; 

const url = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';

test.describe('file upload', () => {


test.beforeEach(async ({ page }) => {

    await page.goto(url);
})

test('verify the file upload', async({page}) => {

const filepath = path.join(__dirname, 'test.txt');
console.log(filepath)

await page.locator("#single-upload").setInputFiles([filepath]);
await page.pause();

});

})