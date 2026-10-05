import {test, expect, devices} from '@playwright/test'

test("Context with options", async({browser})=>{
 const context = await browser.newContext({
    viewport: {width: 375, height: 600},
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    geolocation:  { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation'],
 });

 const page = await context.newPage();
 await page.goto("https://www.google.com");
 await page.waitForTimeout(5000);   // keep the browser open 5s so you can look at it
 await context.close();

});

test("Mobile viewport", async ({ browser, browserName }) => {
 test.skip(browserName === 'firefox', 'Firefox does not support isMobile');

 const context = await browser.newContext({
    viewport: { width: 390, height: 844 },  // phone-sized screen
    isMobile: true,                         // mobile layout behaviour
    hasTouch: true,                         // touch events
    deviceScaleFactor: 3,                   // high-density screen
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
 });

 const page = await context.newPage();
 await page.goto("https://app.vwo.com/#login");
 await context.close();
});