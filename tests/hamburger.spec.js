import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/inventory';

test('Login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
 
    await page.locator('[data-test="open-menu"]').click();

    await expect(page.locator('[data-test="side-menu"]')).toHaveClass(/side-menu is-open/);
});