# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\Web_Table.spec.ts >> Verify Web Table elements
- Location: tests\05_Multiple_Element_filter\Web_Table.spec.ts:3:5

# Error details

```
Error: locator.count: Unsupported token "@id" while parsing css selector "table[@id='customers']/tbody/tr". Did you mean to CSS.escape it?
```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | test("Verify Web Table elements", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://awesomeqa.com/webtable.html");
  6  | 
  7  |     const firstpart = "//table[@id='customers']/tbody/tr[";
  8  |     const secondpart = "]/td[";
  9  |     const thirdpart = "]";
  10 | 
> 11 |     const rows = await page.locator("table[@id='customers']/tbody/tr").count();
     |                                                                        ^ Error: locator.count: Unsupported token "@id" while parsing css selector "table[@id='customers']/tbody/tr". Did you mean to CSS.escape it?
  12 | 
  13 |     const col = await page.locator("table[@id='customers']/tbody/tr[2]/td").count();
  14 | 
  15 |     for (let i = 2; i <= rows; i++) {
  16 |         for (let j = 1; j <= col; j++) {
  17 | 
  18 |             const dynamicpath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
  19 |             const data = await page.locator(dynamicpath).innerText();
  20 | 
  21 |             if (data.includes('Helen Bennett')) {
  22 |                 const countrypath = `$(dynamicpath)/following-sibling::td`;
  23 |                 const countryText = await page.locator(countrypath).innerText();
  24 |                 console.log('------');
  25 |                 console.log(`Helen Bennett is In - ${countryText}`);
  26 |             }
  27 |         }
  28 |     }
  29 | });
  30 | 
  31 | //table[@id="customers"]/tbody/tr
  32 | 
  33 | //table[@id="customers"]/tbody/tr[5]/td[2]
  34 | 
  35 | 
  36 | //table[@id="customers"]/tbody/tr[5]/td[2]/following-sibling::td
  37 | 
  38 | 
```