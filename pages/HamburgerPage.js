class HamburgerPage
{
    constructor(page) {
        this.page = page;
        this.hamburgerMenu = page.locator('[data-test="open-menu"]');
        this.sideMenu = page.locator('[data-test="side-menu"]');
    }

    async goto() {
        await this.page.goto(
            "https://app.thetestingacademy.com/playwright/ttacart/inventory"
        );
    }

    async clickHamburgerMenu() {
        await this.hamburgerMenu.click();
    }
}

export default HamburgerPage;