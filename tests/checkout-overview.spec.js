import { test, expect } from "@playwright/test";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";

test.describe("Checkout Overview Page", () => {

    let checkoutOverview;

    test.beforeEach(async ({ page }) => {
        checkoutOverview = new CheckoutOverviewPage(page);
        await checkoutOverview.goto();
    });

    test("Show Hamburger menu", async () => {
        await expect(checkoutOverview.hamburgerMenu).toBeVisible();
    });

    test("Show Title", async () => {
        await expect(checkoutOverview.brandTitle).toHaveText(/TTACart/);
    });

    test("Show Checkout Title", async () => {
        await expect(checkoutOverview.checkoutTitle).toContainText("Checkout: Overview");
    });

    test("Show Your Cart", async () => {
        await expect(checkoutOverview.shoppingCartLink).toBeVisible();
    });

    test("Show QTY and Description", async () => {
        await expect(checkoutOverview.cartRowHead).toContainText("QTY");
        await expect(checkoutOverview.cartRowHead).toContainText("Description");
    });

    test("Show Product Summary", async () => {
        await expect(checkoutOverview.summaryBlock).toContainText("Payment Information:");
        await expect(checkoutOverview.summaryBlock).toContainText("Shipping Information:");
        await expect(checkoutOverview.summaryBlock).toContainText("Price Total");
        await expect(checkoutOverview.summaryBlock).toContainText("Total:");
    });

    test("Show Cancel Button", async () => {
        await expect(checkoutOverview.cancelButton).toContainText("Cancel");
    });

    test("Show Finish Button", async () => {
        await expect(checkoutOverview.finishButton).toContainText("Finish");
    });
});