import { test, expect } from "@playwright/test";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";

test.describe("Checkout Complete Page", () => {
  let checkoutComplete ;

  test.beforeEach(async ({page}) => {
    checkoutComplete = new CheckoutCompletePage(page);
    await checkoutComplete.goto() ;
  });

  test("Show Hamburger menu", async ({ page }) => {
    await expect(checkoutComplete.hamburgerMenu).toBeVisible();
  });
  
  test("Show Title", async ({ page }) => {
    await expect(checkoutComplete.brandTitle).toContainText("TTACart");
  });

  test("Show Checkout Title", async ({ page }) => {
    await expect(checkoutComplete.checkoutTitle).toContainText("Checkout: Complete!");
  });
  
  test("Show Your Cart", async ({ page }) => {
    await expect(checkoutComplete.shoppingCartLink).toBeVisible();
  });
  
  test("Right icon is visible", async ({ page }) => {
    await expect(checkoutComplete.ponyExpress).toBeVisible() ;
  });

  test("Show Thank you heading", async ({ page }) => {
    await expect(checkoutComplete.completeHeader).toContainText("Thank you for your order!") ;
  });
  
  test("Show Thank you description", async ({ page }) => {
    await expect(checkoutComplete.completeText).toBeVisible() ;
  });

  test("Show Cancel Button", async ({ page }) => {
    await expect(checkoutComplete.backToProducts).toContainText("Back Home");
  });
})