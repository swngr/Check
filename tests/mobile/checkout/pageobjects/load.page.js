class LoadPage {
  driver = global.driver;

  get allowOnceLocator() {
    return $("~Allow Once");
  }

  get welcomeMessage() {
    return $("~Welcome to Tulip");
  }

  get cancelButton() {
    return $("~Cancel");
  }

  async getTextWelcomeMessage() {
    return await this.welcomeMessage.getText();
  }
}

export default new LoadPage();
