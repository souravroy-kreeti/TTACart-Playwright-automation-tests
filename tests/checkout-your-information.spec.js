import { test, expect } from "@playwright/test";
import CheckoutInformationPage from "../pages/CheckoutYourInformationPage.js";

test.describe("Checkout Your Information Page", () => {

    let checkoutInformation ;

    test.beforeEach(async ({ page }) => {
        checkoutInformation = new CheckoutInformationPage(page);
        await checkoutInformation.goto();
    });

    test("Show Hamburger menu", async () => {
        await expect(checkoutInformation.hamburgerMenu).toBeVisible();
    });

    test("Show Title", async () => {
        await expect(checkoutInformation.brandTitle).toContainText("TTACart");
    });

    test("Show Checkout Title", async () => {
        await expect(checkoutInformation.checkoutTitle).toContainText("Checkout: Your Information");
    });

    test("Show Your Cart", async () => {
        await expect(checkoutInformation.shoppingCartLink).toBeVisible();
    });

    test("Show First Name", async () => {
        await expect(checkoutInformation.firstName).toBeVisible();
    });

    test("Show Last Name", async () => {
        await expect(checkoutInformation.lastName).toBeVisible();
    });

    test("Show Postal Code", async () => {
        await expect(checkoutInformation.postalCode).toBeVisible();
    });

    test("Show Cancel Button", async () => {
        await expect(checkoutInformation.cancelButton).toContainText("Cancel");
    });

    test("Show Continue Button", async () => {
        await expect(checkoutInformation.continueButton).toContainText("Continue");
    });
});