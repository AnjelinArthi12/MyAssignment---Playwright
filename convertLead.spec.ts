//Create a lead and convert it to an opportunity
import { test,chromium, expect } from "@playwright/test";

test(`To create and convert lead`,async()=>{
   const browser = await chromium.launch({headless:false});
   const context= await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://koch-3f-dev-ed.develop.my.salesforce.com/")
   console.log(page.url);
   await page.fill('#username','anjelinarthidevaraj@gmail.com');
   await page.fill('#password','Tco@2023');
   await page.locator('#Login').click();
   //Wait for page to load
   await page.waitForLoadState('load');
   //Click on App Launcher
   await page.getByRole("button", {name:'App Launcher'}).click()

   //Search Marketing from App Search
   await page.getByPlaceholder('Search apps and items...').fill('Marketing');
   await page.waitForLoadState('load');

   //Select Marketing from the results view

   await page.getByRole("option", {name:'Marketing', exact:true}).click();
   await page.waitForLoadState('load');

   //Click on leads tab
   await page.getByTitle('Leads').click();
   await page.waitForLoadState('load');
   await page.waitForTimeout(3000);

   //Click on 'New' button
   await page.getByRole("button",{name:"New"}).click();

   //Enter leads details
   await page.waitForLoadState('load');
   await page.locator("button[name='salutation']").click();
   await page.locator("//span[@title='Ms.']").click();
  
   let leadsNum= Math.round(Math.random()*999);
   let leadsName= `Leads${leadsNum}`;
   let companyName="TestLeaf";
   let firstName = "Convert";
   await page.getByPlaceholder('First Name').fill(firstName);
   await page.getByPlaceholder('Last Name').fill(leadsName);
   await page.locator("input[name='Company']").fill(companyName);

   //Save Leads
   await page.locator("//button[@name='SaveEdit']").click();
   expect(await page.innerText('//div[contains(@id,"toastDescription")]//span')).toEqual(`Lead "Ms. ${firstName} ${leadsName}" was created.`);

   //Select More Options
   await page.waitForLoadState('load');
   await page.waitForTimeout(5000);
   await page.locator("//button//span[text()='Show more actions']").click();
   //Click on convert
   await page.locator("//div[@class='slds-dropdown__item']//span[text()='Convert']").click();
   //Convert lead
   await page.waitForLoadState('load');
   //await page.locator(`//button[text()='${companyName}-']`).click();
   await page.getByTitle(`${companyName}-`).click();
   await page.locator("//div[@class='createPanelExpanded']//input").fill(`${firstName} ${leadsName}`);
   await page.locator("//button[text()='Convert']").click();
   //Verify lead has been converted
   await page.waitForLoadState('load');
   expect(await page.innerText("//div[@class='title']//h2")).toEqual("Your lead has been converted");
   await page.getByRole("button",{name:'Go to Leads'}).click();

   //switch to list view
   await page.waitForLoadState('load');
   let listView= await page.isVisible("//button[text()='List View']");
   if(listView==true){
      await page.getByRole("button",{name:'List View'}).click();
   }

   //Search converted leads
   await page.waitForLoadState('load');
   await page.locator("input[name='Lead-search-input']").click();
   await page.fill("input[name='Lead-search-input']",`${firstName} ${leadsName}`);
   await page.keyboard.press('Enter');
   //Verify Lead is not present once converted
   await page.waitForLoadState('load');
   await page.locator("//span[text()='No items to display.']").isVisible();

   //Navigate to Opportunity
   await page.locator("//span[text()='Opportunities']").click();
   await page.waitForLoadState('load');
   await page.getByPlaceholder("Search this list...").click();
   await page.fill("//input[@placeholder='Search this list...']",`${firstName} ${leadsName}`);
   await page.keyboard.press('Enter');
   await page.waitForLoadState('load');

   //Verify converted opportunity
   await page.getByTitle(`${firstName} ${leadsName}`).click();
   await page.waitForLoadState('load');
   await page.getByRole('tab', { name: 'Details' }).click();
   await page.waitForLoadState('load');
   expect(await page.innerText("//span[text()='Opportunity Name']/parent::div/parent::div//lightning-formatted-text")).toEqual(`${firstName} ${leadsName}`);


  })
