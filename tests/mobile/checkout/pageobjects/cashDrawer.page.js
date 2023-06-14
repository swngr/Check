class CashDrawerPage {
  cashDrawerOptionSelector = '**/XCUIElementTypeStaticText[`name CONTAINS "Automation_team"`]';
  nextButtonSelector = '**/XCUIElementTypeButton[`name CONTAINS "Next"`]';

  get cashDrawerOption() {
    return $(`-ios class chain:${this.cashDrawerOptionSelector}`);
  }

  get nextButton() {
    return $(`-ios class chain:${this.nextButtonSelector}`);
  }

  async clickOnCashDrawerOption() {
    await this.cashDrawerOption.click();
  }

  async clickOnNextButton() {
    await this.nextButton.click();
  }
}

export default new CashDrawerPage();
