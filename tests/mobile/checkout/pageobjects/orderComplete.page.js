class OrderCompletePage {
  get orderComplete() {
    return $("~aeOrderCompletedStateText");
  }

  get doneButton() {
    return $("~aeOrderCompletedDoneButton");
  }

  async getTextOrderComplete() {
    await this.orderComplete.waitForDisplayed(3000);
    return await this.orderComplete.getText();
  }

  async clickOnDoneButton() {
    await this.doneButton.waitForDisplayed(3000);
    await this.doneButton.click();
  }
}

export default new OrderCompletePage();
