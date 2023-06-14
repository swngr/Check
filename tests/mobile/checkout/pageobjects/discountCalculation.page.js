import KeypadPage from "./keypad.page";

class AddItemDiscountPage {
  NextButtonSelector = '**/XCUIElementTypeButton[`label == "Next"`]';

  get percentageButton() {
    return $("~Percentage");
  }

  get amountButton() {
    return $("~Amount");
  }

  get nextButton() {
    return $(`-ios class chain:${this.NextButtonSelector}`);
  }

  async clickOnPercentageButton() {
    await this.percentageButton.click();
  }

  async clickOnAmountButton() {
    await this.amountButton.click();
  }

  async clickOnKeypadKey(value) {
    for (let i = 0; i < value.length; i++) {
      await KeypadPage.tapKeypadKey(value[i]);
    }
  }

  async clickOnNextButton() {
    return await this.nextButton.click();
  }
}

export default new AddItemDiscountPage();
