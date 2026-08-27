class CartPage 
{
    constructor(page) 
    {
        this.page = page;
        this.burgerMenu = page.getByRole('button', { name: 'Open menu' });
        this.quantity = page.locator("div.qty");
        this.cartProductNames = page.locator(".inventory-item-name");
        this.removeButtons = page.getByRole("button", { name: "Remove" });
        this.cartTitle = page.getByText("Your Cart", { exact: true });
        this.pageTitle = page.getByText("Your Cart", { exact: true });
        this.brandTitle = page.getByText("TTACart", { exact: true });
        this.cartHeader = page.locator('[data-test="cart-list"]');
        this.cartItems = page.locator('[data-test="inventory-item"]');
        this.emptyCartMessage = page.getByText("Your cart is empty.", {exact: true});
        this.checkoutButton = page.getByRole('link', { name: 'Checkout' });
        this.cartPrices = page.locator('[data-test="inventory-item-price"]');
        this.continueShoppingButton = page.getByRole("link", {name: "Continue Shopping"});

        // Footer
        this.footer = page.locator('[data-test="footer"]');
        this.facebookIcon = page.getByRole("link", { name: "Facebook" });
        this.twitterIcon = page.getByRole("link", { name: "Twitter" });
        this.footerText = page.locator('[data-test="footer-copy"]');
        this.linkedinIcon = page.getByRole("link", { name: "LinkedIn" });
    }

    async goto() {
        await this.page.goto(
            "https://app.thetestingacademy.com/playwright/ttacart/cart",
        );
    }

    getCartItem(index = 0) {
        return this.cartItems.nth(index);
    }

    async removeProduct(index = 0) {
        await this.removeButtons.nth(index).click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async getProductName(index = 0) {
        return await this.cartProductNames.nth(index).textContent();
    }

    async getQuantity(index = 0) {
        return await this.quantity.nth(index).textContent();
    }
}

export default CartPage;