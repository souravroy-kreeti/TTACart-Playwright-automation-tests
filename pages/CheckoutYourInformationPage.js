class CheckoutInformationPage {

    constructor(page) {
        this.page = page;

        this.hamburgerMenu = page.locator('[data-test="open-menu"]');
        this.brandTitle = page.locator(".tta-brand-title");
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');

        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async goto() {
        await this.page.goto(
            "https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one"
        );
    }
}

export default CheckoutInformationPage;