class DiscountReasonPage {
  discountReasonSelector = '**/XCUIElementTypeStaticText[`name contains "Automation"`]';
  applyButtonSelector = '**/XCUIElementTypeButton[`label == "Apply"`]';

  get discountReason() {
    return $(`-ios class chain:${this.discountReasonSelector}`);
  }

  get applyButton() {
    return $(`-ios class chain:${this.applyButtonSelector}`);
  }

  async clickOnDiscountReason() {
    await this.discountReason.waitForDisplayed(3000);
    await this.discountReason.click();
  }

  async clickOnApplyButton() {
    await this.applyButton.waitForDisplayed(3000);
    await this.applyButton.click();
  }
}

export default new DiscountReasonPage();
