import {test, expect} from '@playwright/test'

test("Automate negative test case", async ({page}) => {

    await page.goto("https://wingify.com/free-trial/",{
        waitUntil: "domcontentloaded", timeout: 5000
    });

    let businessEmail = page.locator("//input[@id='free-trial-step1-email']");

    let checkbox1 = page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox");
    let checkbox2 = page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox");
  let button = page.locator("//button[@data-qa='page-su-submit']").first();

    await  businessEmail.fill("dasasasa");
    await checkbox1.click();
    await checkbox2.click();
    await button.click();



  
  let errorMessage = page.locator("//div[contains(@class,'invalid-reason')]").first();
 let error_message_text = await errorMessage.textContent();
 
 expect(error_message_text).toContain("The email address you entered is incorrect.");

 await page.pause();
});