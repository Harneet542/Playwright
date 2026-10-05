# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Multiple_Element_filter\OrangeHRM.spec.ts >> Verify the webelement values
- Location: tests\05_Multiple_Element_filter\OrangeHRM.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText(' Login ') resolved to 2 elements:
    1) <h5 data-v-7b563373="" data-v-0af708be="" class="oxd-text oxd-text--h5 orangehrm-login-title">Login</h5> aka getByRole('heading', { name: 'Login' })
    2) <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button> aka getByRole('button', { name: 'Login' })

Call log:
  - waiting for getByText(' Login ')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [ref=e22]: Admin
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [active] [ref=e29]: admin123
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
      - generic [ref=e34]:
        - generic [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e48]:
          - paragraph [ref=e49]: OrangeHRM OS 5.9
          - paragraph [ref=e50]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e51] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e52]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test("Verify the webelement values", async({page}) =>{
  4  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  | await page.getByPlaceholder('Username').fill("Admin");
  6  | await page.getByPlaceholder('Password').fill("admin123");
> 7  | await page.getByText(' Login ').click();
     |                                 ^ Error: locator.click: Error: strict mode violation: getByText(' Login ') resolved to 2 elements:
  8  | 
  9  | await page.pause();
  10 | })
```