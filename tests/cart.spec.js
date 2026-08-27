import { test, expect } from "@playwright/test" ;
import CartPage from "../pages/CartPage"

test.describe("Cart Page UI", () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.goto();
  });

  test("Show cart page header", async () => {
    await expect(cartPage.burgerMenu).toBeVisible();
    await expect(cartPage.brandTitle).toHaveText(/TTACart/);
    await expect(cartPage.cartTitle).toBeVisible();
    await expect(cartPage.pageTitle).toHaveText("Your Cart");
    await expect(cartPage.cartHeader).toContainText("QTY");
    await expect(cartPage.cartHeader).toContainText("Description");
  });

  test("Show Cart Contents or Empty Message", async () => {
    const hasItems = await cartPage.cartItems.first().isVisible();
    if (hasItems)
    {
      await expect(cartPage.cartItems.first()).toBeVisible();
      await expect(cartPage.quantity.first()).toBeVisible();
      await expect(cartPage.cartProductNames.first()).toContainText("Test.allTheThings() T-Shirt (Red)");
      await expect(cartPage.cartPrices.first()).toBeVisible();
      await expect(cartPage.removeButtons.first()).toBeVisible();
    } 
    else 
    {
      await expect(cartPage.emptyCartMessage).toBeVisible();
      await expect(cartPage.emptyCartMessage).toHaveText("Your cart is empty.");
    }
  });

  test("Show Cart action buttons", async () => {
    await expect(cartPage.continueShoppingButton).toHaveClass(/btn-continue/);
    await expect(cartPage.checkoutButton).toHaveClass(/btn-primary/);
  });

  test("Show Footer", async () => {
    await expect(cartPage.footer).toBeVisible();
    await expect(cartPage.facebookIcon).toBeVisible();
    await expect(cartPage.linkedinIcon).toBeVisible();
    await expect(cartPage.twitterIcon).toBeVisible();

    await expect(cartPage.footerText).toHaveText("(c) 2026 TTACart - The Testing Academy. All Rights Reserved. Terms of Service | Privacy Policy");
  });
});