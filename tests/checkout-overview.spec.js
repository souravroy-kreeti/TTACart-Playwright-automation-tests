// @ts-check
import { test, expect } from "@playwright/test";

const BASE_URL = "https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two";

test("Show burger menu", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-test="open-menu"]')).toBeVisible();
});

test("Show Title", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator(".tta-brand-title")).toHaveText(/TTACart/);
});

test("Show Checkout Title", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-test="title"]')).toContainText("Checkout: Overview");
});

test("Show Your Cart", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test("Show QTY and Description", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('.cart-row-head')).toContainText("QTY");
  await expect(page.locator('.cart-row-head')).toContainText("Description");
});

test("Show Product Summary", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator(".summary-block")).toContainText("Payment Information:");
  await expect(page.locator(".summary-block")).toContainText("Shipping Information:");
  await expect(page.locator(".summary-block")).toContainText("Price Total");
  await expect(page.locator(".summary-block")).toContainText("Total:");
});

test("Show Cancel Button", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-test="cancel"]')).toContainText("Cancel");
});

test("Show Finish Button", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-test="finish"]')).toContainText("Finish");

});

/*
// Price visible inside of cart
test("Price visible inside of cart", async ({ page }) => {
  await page.goto(BASE_URL);

  // await expect(page.locator('[data-test="inventory-item-price"]')).toContainText("$9.99");
  await expect(page.locator('[data-test="inventory-item-price"]')).toBeVisible();

});
*/