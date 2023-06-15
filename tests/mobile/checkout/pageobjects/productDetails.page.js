class ProducDetailsPage {
  ProdDetailsItemNameSelector =
    '**/XCUIElementTypeTable[`name CONTAINS "com.tl.catalog+product_details"`]/**/XCUIElementTypeButton';

  get prodDetailsItemName() {
    return $(`-ios class chain:${this.ProdDetailsItemNameSelector}`);
  }

  get productDetailsLabel() {
    return $("~Product Details");
  }

  get buyNowButton() {
    return $("~aePIPAddToCartInStore");
  }

  get orderForDeliveryButton() {
    return $("~aePIPAddToCartOnline");
  }

  get orderButton() {
    return $("~aeTabBarTabCartOrderName");
  }

  async getTextProductDetailsLabel() {
    return await this.productDetailsLabel.getText();
  }

  async clickOnBuyNowButton() {
    await this.buyNowButton.click();
  }

  async clickOnOrderForDeliveryButton() {
    await this.orderForDeliveryButton.click();
  }

  async clickOnOrderButton() {
    await this.orderButton.waitForDisplayed(3000);
    await this.orderButton.click();
  }

  // getTextProdDetailsItemName gets the name of the item displayed in Prod Details page
  async getTextProdDetailsItemName() {
    return await this.prodDetailsItemName.getText();
  }
}

export default new ProducDetailsPage();
