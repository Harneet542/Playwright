import{ chromium} from 'playwright';

import dotenv from "dotenv";

dotenv.config();

const vwo_User = process.env.vwo_User ?? "";
const vwo_Pass = process.env.vwo_Pass ?? "";



async function savesession() {
    let browser = await chromium.launch({headless:false});
    let context = await browser.newContext();
    let page = await context.newPage();

await page.goto("https://app.vwo.com/#/login");

 await page.fill("#login-username",vwo_User);
await page.fill("#login-password",vwo_Pass);
await page.click("#js-login-btn");

await page.waitForURL("**/#/dashboard**"); 

await context.storageState({path: "./user-session.json"});
console.log("Session saved to user-session.json");
await browser.close();

}


savesession();