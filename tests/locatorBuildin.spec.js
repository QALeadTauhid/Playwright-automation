import { test, expect } from '@playwright/test';

test('Locator BuiltIn', async ({ page }) => {
    test.setTimeout(90000); // 90 seconds for this test
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 60000,
      waitUntil: 'networkidle'
    });
    //page.getByAltText() - to locate an element usually image by it's text alernative
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
  
    //page.getByPlaceholder() - to lacate an input by placeholder
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    //page.getByRole() - to locate an element by it's role(by explicit and implicit accessibility attributes.)
    await page.getByRole('button', {type: 'submit'}).click()

    //page.getByText() - to locate by text content
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible()


    //page.getByLabel() - to locate a form control by associated label's text

    //page.getByTitle() - to locate an element by it's title attribute

    //page.getByTestId() - to locate an element by it's data-testid attribute

    await page.close();
  });
  