import { test, expect } from '@playwright/test';

// const doLogin = async (page, email: string, password: string) => {
//   await page.getByRole("link", {name: "Swag Labs"});
//   await page.getByRole("menuitem", { name: "Login" }).click();
//   await page
//     .getByRole("main")
//     .getByPlaceholder("Please Enter Your Email")
//     .fill(email);
//   await page.getByPlaceholder("Please Enter Your Password").fill(password);
//   await page.getByPlaceholder("Please Enter Your Password").press("Enter");
// };


test('do login with standart user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);

  //fill in form
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  //checks
  
    await expect(page.locator('.product_label')).toHaveText('Products', { timeout: 10000 });
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
    const productsCount = await page.locator('.inventory_item').count();
    await expect(productsCount).toBeGreaterThan(1);

  });

  test("add item to the cart", async ({page}) => {
    await page.getByRole("link", {name: "Sauce labs Backback"});
    await page.getByRole("button", {name: "Add to cart"}).click();
    await page.getByRole("button", { name: "Checkout" }).click();
    // await expect(
    // page.locator("h2", { hasText: "Thank you for your order." })
    //    ).toBeVisible();
});
