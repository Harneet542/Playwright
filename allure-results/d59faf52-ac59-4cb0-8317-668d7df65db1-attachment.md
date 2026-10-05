# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\test_wingify.spec.ts >> go to login
- Location: tests\04_Session_Storage\test_wingify.spec.ts:10:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://app.wingify.com/#/dashboard?accountId=1285643"
Received: "https://app.wingify.com/#/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × locator resolved to <html lang="en" id="atomic" class="no-js">…</html>
       - unexpected value "https://app.wingify.com/#/login"

```

```yaml
- main "Application main content":
  - img "Wingify"
  - list:
    - listitem:
      - textbox "Email address":
        - /placeholder: Enter email ID
    - listitem:
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem: New to Wingify?
    - listitem:
      - link "Start a FREE TRIAL":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - paragraph: Agentic Experience Optimization Platform
  - heading "Make every digital experience relevant" [level=1]
  - img "Wingify-logo"
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.use(
  4  |     {
  5  |         storageState: './user-session.json'
  6  |     
  7  |     }
  8  | );
  9  | 
  10 | test("go to login" , async({page}) => {
  11 |     await page.goto("https://app.wingify.com/#/dashboard?accountId=1285643");
> 12 |     await expect(page).toHaveURL("https://app.wingify.com/#/dashboard?accountId=1285643");
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  13 | 
  14 | });
```