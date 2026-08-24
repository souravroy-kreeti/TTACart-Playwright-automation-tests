// @ts-check
import { test, expect } from "@playwright/test";

const BASE_URL = "https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one";

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
  await expect(page.locator('[data-test="title"]')).toContainText("Checkout: Your Information");
});

test("Show Your Cart", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test("Show First Name", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="firstName"]')).toBeVisible() ;
});

test("Show Last Name", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="lastName"]')).toBeVisible() ;
});

test("Show Postal Code", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="postalCode"]')).toBeVisible() ;
});

test("Show Cancel Button", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="cancel"]')).toContainText("Cancel");
});

test("Show Continue Button", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.locator('[data-test="continue"]')).toContainText("Continue");

});