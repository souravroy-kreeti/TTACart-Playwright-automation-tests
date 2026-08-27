class LoginPage 
{
  constructor(page) 
  {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.brandTitle = page.getByRole("heading", { name: "TTACart" });
    this.loginCard = page.locator('[data-test="login-container"]');
    this.loginHint = page.locator("div.login-hint");
    this.errorMessage = page.getByRole("alert");
  }
 
  async goto() {
    await this.page.goto(
      "https://app.thetestingacademy.com/playwright/ttacart/",
    );
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getUsernameValidationMessage() {
    return await this.usernameInput.evaluate(
      (input) => input.validationMessage,
    );
  }
}

export default LoginPage;