import KeypadPage from "./keypad.page";

class CashAmountPage {
  nextButtonSelector = '**/XCUIElementTypeButton[`label == "Next"`]';
  cashAmountPaidSelector =
    '**/XCUIElementTypeCell[`name CONTAINS "aePaymentMethodCash"`][2]/**/XCUIElementTypeStaticText';
  confirmButtonSelector = '**/XCUIElementTypeButton[`label == "Confirm"`]';
  balanceToPaySelector =
    '**/XCUIElementTypeStaticText[`label == "Balance to Pay"`][2]/**/XCUIElementTypeStaticText';

  get nextButton() {
    return $(`-ios class chain:${this.nextButtonSelector}`);
  }

  get confirmAmountButton() {
    return $("~Confirm");
  }

  get cashAmountPaid() {
    return $(`-ios class chain:${this.cashAmountPaidSelector}`);
  }

  get confirmButton() {
    return $(`-ios class chain:${this.confirmButtonSelector}`);
  }

  get balanceToPay() {
    return $(`-ios class chain:${this.balanceToPaySelector}`);
  }

  changeDue(value) {
    return $(`~${value}`);
  }

  async getTextForChangeDue(value) {
    return await this.changeDue(value).getText();
  }

  async verifyChangeDue(value) {
    await expect(this.changeDue(value)).toBeDisplayed();
  }

  async clickOnNextButton() {
    await this.nextButton.click();
  }

  async clickOnConfirmAmountButton() {
    await this.confirmAmountButton.click();
  }

  async getTextForCashAmountPaid() {
    return await this.cashAmountPaid.getText();
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }

  async getTextForBalanceToPay() {
    return await this.balanceToPay.getText();
  }

  // Balance is in US locale: $1,234.56 4,567.89
  async inputCurrentBalanceToPay(currentBalance) {
    for (let i = 0; i < currentBalance.length; i++) {
      await KeypadPage.tapKeypadKey(currentBalance[i]);
    }
  }
}

export default new CashAmountPage();
