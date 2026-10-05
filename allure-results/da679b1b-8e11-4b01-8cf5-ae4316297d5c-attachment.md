# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\multiple_element_filter.spec.ts >> Verify multiple elements
- Location: tests\05_Multiple_Element_filter\multiple_element_filter.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://app.thetestingacademy.com/playwright/multiple_element_filter", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Verify multiple elements", async ({ page }) => {
> 4  |     await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  5  |     const rightpanellinktext = await page.locator("a.list-group-item").allInnerTexts();
  6  |     console.log(rightpanellinktext.length)
  7  | 
  8  | 
  9  |     for (const link of rightpanellinktext) {
  10 | 
  11 |         console.log(link);
  12 |     }
  13 | 
  14 |     for( const linkText of rightpanellinktext ){
  15 | 
  16 |         if (linkText === "Forgotten Password"){
  17 |             await page.getByText(linkText).click();
  18 |         }
  19 |     }
  20 | 
  21 |     await page.pause();
  22 | });
  23 | 
  24 | 
```