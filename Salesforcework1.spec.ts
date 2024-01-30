/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created*/

import { test, chromium, expect } from "@playwright/test";

test(`To create lead`, async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://koch-3f-dev-ed.develop.my.salesforce.com/")
  console.log(page.url);
  await page.fill('#username', 'anjelinarthidevaraj@gmail.com');
  await page.fill('#password', 'Tco@2023');
  await page.locator('#Login').click();
  //Wait for page to load
  await page.waitForLoadState('load');
  //Click on App Launcher
  //await page.getByRole("button", {name:'App Launcher'}).waitFor({state:'visible'});
  await page.getByRole("button", { name: 'App Launcher' }).click()

  //Search Sales from App Search
  await page.getByPlaceholder('Search apps and items...').fill('Sales');
  await page.waitForLoadState('load');

  //Select Sales from the results view

  await page.getByRole("option", { name: 'Sales', exact: true }).click();
  await page.waitForLoadState('load');

  //Click on leads tabS
  //await page.getByTitle('Leads').waitFor();
  await page.getByTitle('Leads').click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(3000);

  //Click on 'New' button
  //await page.getByRole("button",{name:"New"}).waitFor({state:'visible'});
  await page.getByRole("button", { name: "New" }).click();

  //Enter leads details
  await page.waitForLoadState('load');
  //await page.locator("button[name='salutation']").waitFor();
  await page.locator("button[name='salutation']").click();
  await page.locator("//span[@title='Ms.']").click();

  let leadsNum = Math.round(Math.random() * 999);
  let leadsName = `Leads${leadsNum}`;

  await page.getByPlaceholder('Last Name').fill(leadsName);
  await page.locator("input[name='Company']").fill("Testleaf");

  //Save Leads
  await page.locator("//button[@name='SaveEdit']").click();
  /* let toast= await page.innerText('//div[contains(@id,"toastDescription")]//span');
  console.log(toast); */
  expect(await page.innerText('//div[contains(@id,"toastDescription")]//span')).toEqual(`Lead "Ms. ${leadsName}" was created.`);

})


/*Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test(`Create and Edit Lead in Leaftaps`, async ({ page }) => {
  page.goto("http://leaftaps.com/opentaps/control/main");
  //Login
  await page.fill("#username", "Demosalesmanager");
  await page.fill("[id='password']", "crmsfa");
  await page.click(".decorativeSubmit");
  //Click CRM/SFA
  await page.click("text=CRM/SFA");
  //Click Lead
  await page.getByRole('link', { name: 'Leads', exact: true }).click();
  //Click Create Lead
  await page.click("text = Create Lead");
  //Enter the company name
  await page.fill("#createLeadForm_companyName", "Testleaf");
  let leadsNum = Math.round(Math.random() * 999);
  let leadsName = `Leads${leadsNum}`;
  //Enter the first name
  await page.locator("[name='firstName']").nth(2).fill(leadsName);
  //Enter the last name
  await page.fill("#createLeadForm_lastName", "CNE");
  //Click Submit
  await page.click(".smallSubmit");
  //Edit Created Lead
  await page.locator(".subMenuButton").filter({ hasText: 'Edit' }).click();
  await page.fill("#updateLeadForm_companyName", "Self");
  //Update details
  await page.locator("//input[@value='Update']").click();
})

/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/
test.describe(`Create and Edit Individual`,()=>{
  const individualNum = Math.round(Math.random() * 999);
  const individualName = `Individual${individualNum}`;
  test.beforeAll(`To create individuals`, async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://koch-3f-dev-ed.develop.my.salesforce.com/")
    await page.fill('#username', 'anjelinarthidevaraj@gmail.com');
    await page.fill('#password', 'Tco@2023');
    await page.locator('#Login').click();
    //Wait for page to load
    await page.waitForLoadState('load');
    //Click on App Launcher
    await page.getByRole("button", { name: 'App Launcher' }).click();
    //Search Individuals from App Search
    await page.getByPlaceholder('Search apps and items...').fill('Individuals');
    await page.waitForLoadState('load');
    //Select Individuals from the results view

    await page.getByRole("option", { name: 'Individuals', exact: true }).click();
    await page.waitForLoadState('load');
    //Create New Individuals
    await page.getByRole("button", { name: "New" }).click();
    await page.locator("//span[text()='Salutation']//parent::span//parent::div//a").click();
    //await page.locator("//span[@title='Ms.']").click();
    await page.getByTitle('Mr.').click();
  

    await page.getByPlaceholder("Last Name").fill(individualName);
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    expect(await page.innerText("//div[contains(@id,'toastDescription')]//span")).toEqual(`Individual \"${individualName}\" was created.`);

  })
  /*Assignment: 4 Edit Individuals
  Test Steps:
  1. Login to https://login.salesforce.com
  2. Click on the toggle menu button from the left corner
  3. Click View All and click Individuals from App Launcher 
  4. Click on the Individuals tab 
  5. Search the Individuals last name
  6. Click on the Dropdown icon and Select Edit
  7. Select Salutation as 'Mr'
  8. Now enter the first name
  9. Click on Save and Verify the first name 
  */
  
  test(`Edit created Individual`,async({ page })=>{
    await page.goto("https://koch-3f-dev-ed.develop.my.salesforce.com/")
    await page.fill('#username', 'anjelinarthidevaraj@gmail.com');
    await page.fill('#password', 'Tco@2023');
    await page.locator('#Login').click();
    //Wait for page to load
    await page.waitForLoadState('load');
    //Click on App Launcher
    await page.getByRole("button", { name: 'App Launcher' }).click()

    //Search Individuals from App Search
    await page.getByPlaceholder('Search apps and items...').fill('Individuals');
    await page.waitForLoadState('load');
    //Select Individuals from the results view

    await page.getByRole("option", { name: 'Individuals', exact: true }).click();
    await page.waitForLoadState('load');

    //Search created Individual
    await page.getByPlaceholder("Search this list...").click();
    await page.getByPlaceholder("Search this list...").fill(individualName);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: `${individualName}` }).click();
    //Edit the created Individual
    await page.getByRole("button",{name:'Edit'}).click();
    await page.getByPlaceholder("First Name").fill('Salesforce');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    expect(await page.innerText("//div[contains(@id,'toastDescription')]//span")).toEqual(`Individual \"Salesforce ${individualName}\" was saved.`);


  })
})