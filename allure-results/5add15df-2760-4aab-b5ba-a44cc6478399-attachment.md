# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\OrangeHRM.spec.ts >> Verify the webelement values
- Location: tests\05_Multiple_Element_filter\OrangeHRM.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByAltText(' Login ')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test("Verify the webelement values", async({page}) =>{
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  | await page.getByPlaceholder('Username').fill("Admin");
  6  | await page.getByPlaceholder('Password').fill("admin123");
> 7  | await page.getByAltText(' Login ').click();
     |                                    ^ Error: locator.click: Target page, context or browser has been closed
  8  | 
  9  | await page.pause();
  10 | })
```