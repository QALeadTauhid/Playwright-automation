import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html')

    //single web elements
    //click on login button - property
    //await page.locator('id=login2').click()
    //click on login button other way
    await page.click('id=login2')

    //username -css
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill("#loginusername", "pavanol")
    //await page.type("#loginusername", "pavanol")

    //password - css
    //await page.locator('#loginpassword').fill("pavanol")
    await page.fill("input[id='loginpassword']", "test@123")

    //Login button - Xpath
    await page.click("//button[normalize-space()='Log in']")

    //Logout element presence - CSS
    // let LogoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")
    // await expect(LogoutLink).toBeVisible()
    await page.waitForSelector('#logout2', { state: 'visible', timeout: 50000 });
    const LogoutLink = page.locator('#logout2');
    await expect(LogoutLink).toBeVisible();


    await page.close()

})