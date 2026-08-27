import { test, expect } from "@playwright/test";
import HamburgerPage from "../pages/HamburgerPage";

test.describe("Inventory Page", () => {

    let hamburgerPage;

    test.beforeEach(async ({ page }) => {
        hamburgerPage = new HamburgerPage(page);
        await hamburgerPage.goto();
    });

    test("Show Hamburger menu", async () => {
        await hamburgerPage.clickHamburgerMenu();
        await expect(hamburgerPage.sideMenu).toHaveClass(/side-menu is-open/);
    });
});