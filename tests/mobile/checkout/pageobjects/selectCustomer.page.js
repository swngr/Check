class SelectCustomerPage {
  customerFromListSelector =
    '**/XCUIElementTypeCell[`name CONTAINS "io.tl.sat.customers.cell"`][1]';
  itemInMiniCartSelector = '**/XCUIElementTypeStaticText[`name CONTAINS "aeProductTitle"`]';

  get selectCustomerFromList() {
    return $(`-ios class chain:${this.customerFromListSelector}`);
  }

  get itemInMiniCart() {
    return $(`-ios class chain:${this.itemInMiniCartSelector}`);
  }

  get searchCustomerField() {
    return $("~io.tl.sat.customers.search");
  }

  async inputCustomerInfo(customer) {
    return await this.searchCustomerField.setValue(customer);
  }

  async clickOnSelectedCustomer() {
    await this.selectCustomerFromList.click();
  }
}

export default new SelectCustomerPage();
