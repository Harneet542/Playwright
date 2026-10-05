# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\OrangeHRM.spec.ts >> Verify the webelement values
- Location: tests\05_Multiple_Element_filter\OrangeHRM.spec.ts:3:5

# Error details

```
Error: row not found!
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test("Verify the webelement values", async ({ page }) => {
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  |     await page.getByPlaceholder('Username').fill("Admin");
  6  |     await page.getByPlaceholder('Password').fill("admin123");
  7  |     await page.getByRole('button', { name: ' Login ' }).click();
  8  | 
  9  | await page.locator('//a[contains(@href,"viewPimModule")]').click();
  10 |   await page.getByRole('button', { name: ' Add ' }).click();
  11 | 
  12 |  await page.getByRole('textbox', { name: 'First Name' }).fill("iphone15");
  13 |   await page.getByRole('textbox', { name: 'Last Name' }).fill("promax");
  14 |   await page.getByRole('button', { name: 'Save' }).click();
  15 | 
  16 |   // go back to PIM page 
  17 | await page.locator('//a[contains(@href,"viewPimModule")]').click();
  18 | 
  19 | // while loop 
  20 | 
  21 | let name: string = "iphone15 promax"
  22 | let row;
  23 | 
  24 | while(true){
  25 |     row = page.locator('div.oxd-table-card').filter({has: page.getByText(name, {exact:true} )});
  26 |     if (await row.count()){
  27 |         break;
  28 |     }
  29 |     const next = page.locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)');
  30 | 
  31 | 
  32 |     if( await next.count() === 0){
> 33 |          throw new Error("row not found!")
     |                ^ Error: row not found!
  34 |         }
  35 |         await next.click();
  36 |     
  37 | }
  38 | 
  39 | 
  40 |     await page.pause();
  41 | })
```