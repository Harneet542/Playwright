import {test, expect, Locator} from '@playwright/test';

test("Test hover functionality in spice jet website", async ({page}) => {

 await page.goto('https://www.spicejet.com/');
 await page.getByText('Add-ons', {exact:true}).hover();
 await page.getByText('FlyEarly', {exact:true}).click();

 await page.pause();
});