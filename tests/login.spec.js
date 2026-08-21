import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    // Open login page
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    // Enter username
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

    // Enter password
    await page.getByPlaceholder('Password').fill('tta_secret');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/.*inventory/);
});

test('Login with invalid credentials', async ({ page }) => {
    // Open login page
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    // Enter username
    // await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user_sourav');

    // Enter password
    await page.getByPlaceholder('Password').fill('tta_secret');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).not.toHaveURL(/.*inventory/);
});