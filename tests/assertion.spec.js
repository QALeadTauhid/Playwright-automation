import {test, expect} from '@playwright/test';

test('Assertions types', async ({page})=>{
await page.goto("https://demo.nopcommerce.com/register")

//page has URL
await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

//Page has title
await expect(page).toHaveTitle("nopCommerce demo store. Register")

// Element is visible or not
const logoElement = await page.locator(".header-logo")
await expect(logoElement).toBeVisible()
})   