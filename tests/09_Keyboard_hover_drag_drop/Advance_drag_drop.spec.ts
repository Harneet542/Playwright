import { test, expect, Locator } from '@playwright/test';

test("Verify advance drag and drop", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");
    let source = page.getByTestId('card-review-pr-21');
    const sBox = (await source.boundingBox())!;

    const target = page.getByTestId("col-in-progress");
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    await page.mouse.up();
    //   await source.dragTo(target);


    await page.pause();

});
