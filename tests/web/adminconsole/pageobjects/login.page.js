import Page from "./page";
import { generateToken } from "authenticator";

class LoginPage extends Page {
  get usernameInput() {
    return $('//*[@id="username"]');
  }
  get passwordInput() {
    return $('//*[@id="password"]');
  }
  get authTokenInput() {
    return $('//*[@id="auth_token"]');
  }
  get loginButton() {
    return $('//*[@id="_submit"]');
  }
  get formSignin() {
    return $(".form-signin");
  }

  /**
   * define or overwrite page methods
   */
  async open() {
    await super.open("login");
    await browser.waitUntil(async () => (await this.formSignin.isDisplayed()) === true, {
      timeout: 5000,
    });
  }

  async login() {
    await this.loginButton.waitForDisplayed({ timeout: 5000 });
    await this.usernameInput.setValue(process.env.AC_USERNAME);
    await this.passwordInput.setValue(process.env.AC_PASSWORD);
    await this.authTokenInput.setValue(generateToken(process.env.AC_AUTH_SECRET));

    await this.loginButton.click();
  }
}

export default new LoginPage();
