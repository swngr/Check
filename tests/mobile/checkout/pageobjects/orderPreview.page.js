class OrderPreviewPage {
  originalItemPriceSelector = '**/XCUIElementTypeStaticText[`name == "aeProductPrice"`][2]';
  discountedItemPriceFromPercentageSelector =
    '**/XCUIElementTypeCell[`name == "aeCartItemInStore-0"`][2]/XCUIElementTypeStaticText[6]';
  discountedItemPriceFromAmountSelector =
    '**/XCUIElementTypeCell[`name == "aeCartItemInStore-0"`][2]/XCUIElementTypeStaticText[9]';
  plusSignSelector = '**/XCUIElementTypeButton[`label CONTAINS "+"`]';

  cancelButtonSelector = '**/XCUIElementTypeButton[`name CONTAINS "Cancel"`]';

  get cancelButton() {
    return $(`-ios class chain:${this.cancelButtonSelector}`);
  }
  get addShippingDetails() {
    return $("~aeAddShippingCell");
  }

  get shippingDetailsLabel() {
    return $("~Shipping Detail");
  }

  get billingAddressLabel() {
    return $("~Billing Address");
  }

  get shippingMethodLabel() {
    return $("~Shipping Method");
  }

  get addDiscountButton() {
    return $("~Add Discount");
  }

  get itemDiscountOption() {
    return $("~Item Discount");
  }

  get originalItemPrice() {
    return $(`-ios class chain:${this.originalItemPriceSelector}`);
  }

  get discountedItemPriceFromPercentage() {
    return $(`-ios class chain:${this.discountedItemPriceFromPercentageSelector}`);
  }

  get discountedItemPriceFromAmount() {
    return $(`-ios class chain:${this.discountedItemPriceFromAmountSelector}`);
  }

  get itemSubtotalSelector() {
    return $("~aeTotal-Subtotal-description");
  }

  async clickOnCancelButton() {
    await this.cancelButton.click();
  }

  async getTextForShippingDetails() {
    return await this.shippingDetailsLabel.getText();
  }

  async getTextForBillingAddressLabel() {
    return await this.billingAddressLabel.getText();
  }

  async getTextForShippingMethodLabel() {
    return await this.shippingMethodLabel.getText();
  }

  async clickOnAddShippingDetails() {
    await this.addShippingDetails.click();
  }

  async getTextOriginalPrice() {
    return await this.originalItemPrice.getText();
  }

  async getTextDiscountedPriceFromPercentage() {
    await this.discountedItemPriceFromPercentage.waitForDisplayed(3000);
    return await this.discountedItemPriceFromPercentage.getValue();
  }

  async getTextDiscountedPriceFromAmount() {
    await this.discountedItemPriceFromAmount.waitForDisplayed(3000);
    return await this.discountedItemPriceFromAmount.getValue();
  }

  async clickOnAddDiscountButton() {
    await this.addDiscountButton.waitForDisplayed(3000);
    await this.addDiscountButton.click();
  }

  async clickOnItemDiscountOption() {
    await this.itemDiscountOption.waitForDisplayed(3000);
    await this.itemDiscountOption.click();
  }

  async getTextSubtotal() {
    await this.itemSubtotalSelector.waitForDisplayed(3000);
    return await this.itemSubtotalSelector.getText();
  }
}

export default new OrderPreviewPage();
