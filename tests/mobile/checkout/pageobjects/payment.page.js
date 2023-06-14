class PaymentPage {
  get debitMethod() {
    return $("~aePaymentMethodDebit");
  }

  get cashMethod() {
    return $("~aePaymentMethodCash");
  }

  get remotePayMethod() {
    return $("~aePaymentMethodRemotePay");
  }

  get remotePayViaSms() {
    return $("~aePaymentMethodRemotePayviaSMS");
  }

  get splitOption() {
    return $("~Split");
  }

  get balanceToPayHeaderTotal() {
    return $("~aePaymentMethodSelectionHeaderTotal");
  }

  async clickOnDebitMethod() {
    await this.debitMethod.waitForDisplayed(3000);
    await this.debitMethod.click();
  }

  async clickOnCashMethod() {
    await this.cashMethod.waitForDisplayed(3000);
    await this.cashMethod.click();
  }

  async clickOnRemotePayMethod() {
    await this.remotePayMethod.waitForDisplayed(3000);
    await this.remotePayMethod.click();
  }

  async clickOnRemotePayViaSms() {
    await this.remotePayViaSms.waitForDisplayed(3000);
    await this.remotePayViaSms.click();
  }

  async clickOnSplitOption() {
    await this.splitOption.waitForDisplayed(3000);
    await this.splitOption.click();
  }

  async getTextBalanceToPayTotal() {
    return await this.balanceToPayHeaderTotal.getText();
  }
}

export default new PaymentPage();
