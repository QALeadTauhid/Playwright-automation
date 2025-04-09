import { test, expect } from '@playwright/test';

test('Locator Multiple Elements', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  const links = await page.$$('a');
  console.log('Number of links:', links.length);

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText?.trim());
  }

//product name listing
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
const products = await page.$$("//div[@id='tbodyid']//div//h4/a");
console.log('Number of products:', products.length);

for(const product of products){
  const productName = await product.textContent();
  console.log(productName?.trim());
}

await page.close()
});
