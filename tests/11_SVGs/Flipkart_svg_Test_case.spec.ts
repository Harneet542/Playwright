import { test, expect, Locator } from '@playwright/test';

test.describe('SVG Elements', () => {

   const URL = 'https://www.flipkart.com/search'

   test.beforeEach(async ({ page }) => {
      console.log("Before running any Testcase!")
      await page.goto(URL);
   });



   test('Verify the SVG elements', async ({ page }) => {

      await page.locator('input[name="q"]').fill("macmini");
      const svgElements: Locator = page.locator('svg');
      await svgElements.first().click();
      // await page.waitForTimeout(500);



      const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

      // wait for the macmini results to replace the default products before counting
      await expect(titleResults.first()).toContainText(/mac/i);

       const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }


      await page.pause();
   });

});