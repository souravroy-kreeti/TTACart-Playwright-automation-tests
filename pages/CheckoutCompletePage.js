class CheckoutCompletePage {

    constructor(page) 
    {
        this.page = page;
        this.hamburgerMenu = page.locator('[data-test="open-menu"]');
        this.brandTitle = page.locator(".tta-brand-title");
        this.checkoutTitle = page.locator('[data-test="title"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.ponyExpress = page.locator('[data-test="pony-express"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backToProducts = page.locator('[data-test="back-to-products"]');
    }
  
    async goto() {
        await this.page.goto(
        "https://app.thetestingacademy.com/playwright/ttacart/checkout-complete",
        );
    }
}

export default CheckoutCompletePage;