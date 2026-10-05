import { test, expect } from '@playwright/test'

test.describe("Login test", async () => {

    test("valid credentials", async ({ page }) => {
        await page.goto("https:google.com");

    });

    test("invalid credentials", async ({ page }) => {
        await page.goto("https://google.com");
    });
})