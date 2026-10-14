# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Shadow_DoM\Selector_Hub.spec.ts >> verify shadow Dom
- Location: tests\12_Shadow_DoM\Selector_Hub.spec.ts:13:5

# Error details

```
Error: locator.fill: Unexpected token "=" while parsing css selector "#id="pwd"". Did you mean to CSS.escape it?
Call log:
  - waiting for #id="pwd"

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
  11 | });
  12 | 
  13 | test("verify shadow Dom", async({page}) => {
  14 |  const name = page.locator('input[name= "text"]').fill("test");
  15 |  const pizza = page.locator('#pizza').fill('Margertta');
  16 |  const test = page.locator('#training').fill("test2");
> 17 |  const password = page.locator('#id="pwd"').fill('pw')
     |                                             ^ Error: locator.fill: Unexpected token "=" while parsing css selector "#id="pwd"". Did you mean to CSS.escape it?
  18 | 
  19 | });
  20 | 
```