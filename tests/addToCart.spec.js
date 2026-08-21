import { test, expect } from '@playwright/test';

test("User should be able to add all products to cart", async ({ page }) => {
    await page.goto(
        "https://app.thetestingacademy.com/playwright/ttacart/inventory"
    );

    const addToCartButtons = page.getByRole("button", {
        name: "Add to cart"
    });

    const productCount = await addToCartButtons.count();

    for (let i = 0; i < productCount; i++) {
        await addToCartButtons.nth(0).click();
    }

    // Verify cart count
    await expect(page.locator("YOUR_CART_COUNT_SELECTOR"))
        .toHaveText(String(productCount));
});