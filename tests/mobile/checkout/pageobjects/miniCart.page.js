class MiniCartPage {
  itemNameInMiniCartSelector = '**/XCUIElementTypeStaticText[`name CONTAINS "aeProductTitle"`]';
  itemInMiniCartSelector = '**/XCUIElementTypeCell[`name CONTAINS "aeCartItemInStore"`]';

  get itemNameInMiniCart() {
    return $(`-ios class chain:${this.itemNameInMiniCartSelector}`);
  }

  get itemInMiniCart() {
    return $(`-ios class chain:${this.itemInMiniCartSelector}`);
  }

  get checkOutButton() {
    return $("~com.tl.checkout+mini_cart#continue_checkout_action");
  }

  get dismissMiniCart() {
    return $("~com.tl.checkout+mini_cart#dismissal_handle");
  }

  get selectCustomerField() {
    return $("~aeCartAddCustomer");
  }

  get itemTotal() {
    return $("~aeCartTotal");
  }

  async getTextItemNameInMiniCart() {
    return await this.itemNameInMiniCart.getText();
  }

  async getAmountItemTotal() {
    return await this.itemTotal.getValue();
  }

  async clickOnCheckOutButton() {
    await this.checkOutButton.waitForDisplayed(3000);
    await this.checkOutButton.click();
  }

  async clickOnDismissMiniCart() {
    await this.dismissMiniCart.waitForDisplayed(3000);
    await this.dismissMiniCart.click();
  }

  async clickOnSelectCustomerField() {
    await this.selectCustomerField.click();
  }

  async clickOnItemInMiniCart() {
    await this.itemInMiniCart.click();
  }
}

export default new MiniCartPage();
