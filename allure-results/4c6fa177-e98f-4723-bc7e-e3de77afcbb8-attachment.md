# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Keyboard_hover_drag_drop\Automate_test_academy_hover_menu.spec.ts >> Hover only Menu
- Location: tests\09_Keyboard_hover_drag_drop\Automate_test_academy_hover_menu.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('menuitem', { name: 'Taxi', exact: true })

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test'
  2  | 
  3  | test("Hover only Menu", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
  6  |     await page.getByText("Add-ons", { exact: true }).hover();
> 7  |     await page.getByRole("menuitem", {name: 'Taxi', exact: true }).click();
     |                                                                    ^ Error: locator.click: Target page, context or browser has been closed
  8  | 
  9  |     await page.pause();
  10 | })
```