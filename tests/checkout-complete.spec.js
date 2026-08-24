import { test, expect } from "@playwright/test";

const BASE_URL = "https://app.thetestingacademy.com/playwright/ttacart/checkout-complete";

test("Show Hamburger menu", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="open-menu"]')).toBeVisible();
});

test("Show Title", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator(".tta-brand-title")).toContainText("TTACart");
});

test("Show Checkout Title", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="title"]')).toContainText("Checkout: Complete!");
});

test("Show Your Cart", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test("Right icon is visible", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="pony-express"]')).toBeVisible() ;
});

test("Show Thank you heading", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="complete-header"]')).toContainText("Thank you for your order!") ;
});

test("Show Thank you description", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="complete-text"]')).toBeVisible() ;
});

test("Show Cancel Button", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="back-to-products"]')).toContainText("Back Home");
});