import {test, expect} from '@playwright/test'

//login to the page 
test("Verify the url of student login", async({page}) => {
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter", {
    waitUntil: "domcontentloaded"
});

//enter login credentials  

let email = page.locator("#email");
let password = page.locator("#password");
let box = page.locator("//input[contains(@name,'remember')]");


await email.fill("invalidemail@gmail.com");
await password.fill("Test@12345");
await box.click();

await page.locator("//button[contains(@class,'login-btn')]").click();


//Assertion 
await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=invalidemail%40gmail.com&password=Test%4012345&remember=yes#login-success");

});