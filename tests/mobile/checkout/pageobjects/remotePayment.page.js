class RemotePaymentPage {
  sendButtonSelector = '**/XCUIElementTypeButton[`name contains "Send"`]';
  confirmationMessageSelector = '**/XCUIElementTypeStaticText[`name contains "Remote Pay Sent!"`]';

  get sendButton() {
    return $(`-ios class chain:${this.sendButtonSelector}`);
  }

  get confirmationMessage() {
    return $(`-ios class chain:${this.confirmationMessageSelector}`);
  }

  get doneButton() {
    return $("~aeOrderCompletedDoneButton");
  }

  async clickOnSendButton() {
    await this.sendButton.click();
  }

  async getTextRemotePayConfirmation() {
    return await this.confirmationMessage.getText();
  }

  async clickOnDoneButton() {
    await this.doneButton.click();
  }
}

export default new RemotePaymentPage();
