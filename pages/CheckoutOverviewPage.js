class CheckoutOverviewPage {

    constructor(page) {
        this.page = page;

        this.hamburgerMenu = page.locator('[data-test="open-menu"]');
        this.brandTitle = page.locator(".tta-brand-title");
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');

        this.cartRowHead = page.locator(".cart-row-head");
        this.summaryBlock = page.locator(".summary-block");

        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async goto() {
        await this.page.goto(
            "https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two"
        );
    }
}

export default CheckoutOverviewPage;