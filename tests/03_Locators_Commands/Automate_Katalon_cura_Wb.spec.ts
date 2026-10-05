import {test, expect} from '@playwright/test'

test('tc#1 verify that the title is visible' , async({page}) => {

  await page.goto("https://katalon-demo-cura.herokuapp.com/",{
    waitUntil: 'domcontentloaded',
    timeout: 3000
  }); 
  let makeAppoitmentbutton  = page.locator("#btn-make-appointment");
 await makeAppoitmentbutton.click();

 let loginUsername = page.locator("#txt-username");
 let loginPassword = page.locator("#txt-password");
 let loginButton = page.locator("#btn-login");

 await loginUsername.fill("John Doe");
 await loginPassword.fill("ThisIsNotAPassword");
 await loginButton.click();

let mktApt = page.locator("h2");
await expect(mktApt).toContainText("Make Appointment");

await page.pause();
});



