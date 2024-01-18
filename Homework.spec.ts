 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username
 * Enter the password
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */

 import { test,chromium } from "@playwright/test";

 test(`To launch Salesforce`,async()=>{
    const browser = await chromium.launch({headless:false});
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://koch57-dev-ed.develop.my.salesforce.com");
    console.log(page.url);
    await page.fill('#username','anjelinarthidevaraj@gmail.com')
    await page.fill('#password','Tco@2023')
    await page.waitForTimeout(5000)
    page.locator("name=Login").click
 })
