# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Shadow_DoM\Selector_Hub.spec.ts >> selectro hub >> verify shadow Dom
- Location: tests\12_Shadow_DoM\Selector_Hub.spec.ts:12:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#training')

```

# Test source

```ts
  1  | import {test, expect, Locator} from '@playwright/test';
  2  | 
  3  | test.describe("selectro hub", () => {
  4  | 
  5  |     const url = 'https://selectorshub.com/xpath-practice-page/';
  6  | 
  7  |     test.beforeEach(async ({page}) => {
  8  | 
  9  |         await page.goto(url)
  10 |     })
  11 | 
  12 | test("verify shadow Dom", async({page}) => {
  13 |  const name = await page.locator('#kils').fill("test");
  14 |  const pizza = page.locator('#pizza').fill('Margertta');
> 15 |  const test = page.locator('#training').fill("test2");
     |                                         ^ Error: locator.fill: Target page, context or browser has been closed
  16 |  const password = page.locator("#pwd").fill('pw')
  17 | await page.pause();
  18 | });
  19 | });
  20 | 
```