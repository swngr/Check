import KeypadPage from "./keypad.page";

class SplitAmountPage {
  nextButtonSelector = '**/XCUIElementTypeButton[`label == "Next"`]';
  cashAmountPaidSelector =
    '**/XCUIElementTypeCell[`name CONTAINS "aePaymentMethodCash"`][2]/**/XCUIElementTypeStaticText';
  confirmButtonSelector = '**/XCUIElementTypeButton[`label == "Confirm"`]';
  balanceToPaySelector =
    '**/XCUIElementTypeStaticText[`label == "Balance to Pay"`][2]/**/XCUIElementTypeStaticText';

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

  get changeDue() {
    return $("~$0.00");
  }

  get percentageButton() {
    return $("~Percentage");
  }

  get amountButton() {
    return $("~Amount");
  }

  get nextButton() {
    return $(`-ios class chain:${this.nextButtonSelector}`);
  }

  get payRemainderButton() {
    return $("~Pay Remainder");
  }

  async getTextChangeDue() {
    return await this.changeDue.getText();
  }

  async getTextCashAmountPaid() {
    return await this.cashAmountPaid.getText();
  }

  async getTextBalanceToPay() {
    return await this.balanceToPay.getText();
  }

  async clickOnConfirmAmountButton() {
    await this.confirmAmountButton.click();
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }

  async clickOnPercentageButton() {
    await this.percentageButton.click();
  }

  async clickOnAmountButton() {
    await this.amountButton.click();
  }

  async clickOnNextButton() {
    await this.nextButton.click();
  }

  async clickOnPayRemainderButton() {
    await this.payRemainderButton.click();
  }

  // Balance is in US locale: $1,234.56 4,567.89
  async inputCurrentBalanceToPay(balanceToPay) {
    const balanceToPayStr = await balanceToPay.toString();
    for (let i = 0; i <= balanceToPayStr.length; i++) {
      await KeypadPage.tapKeypadKey(balanceToPayStr[i]);
    }
  }
}

export default new SplitAmountPage();
