# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_web_select_dropdowns\customer_dropdown.spec.ts >> verify dropdown
- Location: tests\07_web_select_dropdowns\customer_dropdown.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('option', { name: 'Jave' })

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test'
  2  | 
  3  | test('verify dropdown', async ({ page }) => { 
  4  | 
  5  | await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns")
  6  | 
  7  | await page.getByTestId('lang-trigger').click();
> 8  | await page.getByRole("option", {name:"Jave"}).click();
     |                                               ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 | await page.pause();
  11 | });
```