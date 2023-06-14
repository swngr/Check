class LoginPage {
  get settingsButton() {
    return $("~aeTabBarTabSettings");
  }

  get logOutButton() {
    return $("~Log Out");
  }

  async loginWithValidCredentials() {
    const loc_loginForm_username = '//*[@id="username"]';
    const loc_loginForm_password = '//*[@id="password"]';
    const loc_webLink_login = "login";
    const loc_buttons_loginButton = '//*[@id="loginButton"]';
    const loc_buttons_submit = "button.login100-form-btn";

    let context = await driver.getContextByUrl(loc_webLink_login);

    await driver.switchContext(context.id);

    const el_buttons_loginButton = await driver.$(loc_buttons_loginButton);
    await el_buttons_loginButton.waitForDisplayed({ timeout: 45000 });
    const el_loginForm_username = await driver.$(loc_loginForm_username);
    const el_loginForm_password = await driver.$(loc_loginForm_password);
    const el_buttons_submit = await driver.$(loc_buttons_submit);

    await el_loginForm_username.setValue("Kim");
    await el_loginForm_password.setValue("Kim");
    await el_buttons_submit.click();
    await driver.switchContext("NATIVE_APP");
  }

  async logOut() {
    await this.settingsButton.click();
    await this.logOutButton.click();
  }
}

export default new LoginPage();
