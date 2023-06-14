import Page from "./page";

class MainPage extends Page {
  get welcomeTextMessage() {
    return $('//*[@id="app_welcome"]//section/h2');
  }

  async waitForMainPageToLoad() {
    if (!this.welcomeTextMessage.isDisplayed()) {
      await this.welcomeTextMessage.waitForDisplayed(5000);
    }
  }

  async getWelcomeTextMessage() {
    return await this.welcomeTextMessage.getText();
  }
}

export default new MainPage();
