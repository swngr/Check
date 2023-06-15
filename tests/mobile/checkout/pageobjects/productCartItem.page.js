class productCartItemPage {
  discountedItemPriceSelector =
    '**/XCUIElementTypeCell[`name == "io.tl.test.ui.checkout.cart.item.cell"`]/XCUIElementTypeStaticText[6]';
  originalItemPriceSelector = '**/XCUIElementTypeStaticText[`name == "aeProductPrice"`][2]';
  '**/XCUIElementTypeCell[`name == "io.tl.test.ui.checkout.cart.item.cell"`]/XCUIElementTypeStaticText[4]';
  doneButtonSelector = '**/XCUIElementTypeButton[`label == "Done"`]';
  discountLineSelector = '**/XCUIElementTypeCell[`name contains "aeCartItemInStore"`]';

  get discountLine() {
    return $(`-ios class chain:${this.discountLineSelector}`);
  }

  get originalItemPrice() {
    return $(`-ios class chain:${this.originalItemPriceSelector}`);
  }

  get discountedItemPrice() {
    return $(`-ios class chain:${this.discountedItemPriceSelector}`);
  }

  async getValueCartItemCell() {
    return await this.cartItemCell.getValue();
  }

  // get oneItemQuantity() {
  //   return $(`-ios class chain:${this.oneItemQuantitySelector}`);
  // }

  // get plusSign() {
  //   return $(`-ios class chain:${this.plusSignSelector}`);
  // }

  get addDiscountButton() {
    return $("~Add Discount");
  }

  get doneButton() {
    return $(`-ios class chain:${this.doneButtonSelector}`);
  }

  async getTextOriginalPrice() {
    await this.originalItemPrice.waitForDisplayed(4000);
    return await this.originalItemPrice.getValue();
  }

  async getTextDiscountedPrice() {
    await this.discountedItemPrice.waitForDisplayed(4000);
    return await this.discountedItemPrice.getValue();
  }

  // async getTextDiscountedPriceFromAmount() {
  //   await this.discountedItemPriceFromAmount.waitForDisplayed(3000);
  //   return await this.discountedItemPriceFromAmount.getValue();
  // }

  // async getTextFromOneItemQuantity() {
  //   return await this.oneItemQuantity.getText();
  // }

  // async clickOnPlusSign() {
  //   await this.plusSign.click();
  // }

  async clickOnAddDiscountButton() {
    await this.addDiscountButton.waitForDisplayed(3000);
    await this.addDiscountButton.click();
  }

  async clickOnDoneButton() {
    await this.doneButton.click();
  }
}

export default new productCartItemPage();
