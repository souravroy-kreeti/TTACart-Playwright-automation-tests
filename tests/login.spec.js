import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage.js"
import users from '../data/users.js';

test.describe("Login Page", () => {

    let loginPage ;
    const password = users.password ;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page) ;
        await loginPage.goto() ;
    });
 
    test('Login with valid credentials', async ({ page }) => {

        const user = users.standardUser.username ;
        await loginPage.login(user, password) ;
        await expect(page).toHaveURL(/.*inventory/);
    });
    
    test('Login with invalid credentials', async ({ page }) => {
        const user = "SOURAV_ROY" ;
        await loginPage.login(user, password) ;
        await expect(page).not.toHaveURL(/.*inventory/);
    });
});