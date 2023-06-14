class SearchCustomerPage {
  customerInListSelector =
    '**/XCUIElementTypeCell[`name CONTAINS "io.tulip.sat.customers.cell"`][1]';
  itemInMiniCartSelector = '**/XCUIElementTypeStaticText[`name CONTAINS "aeProductTitle"`]';

  get selectCustomerInList() {
    return $(`-ios class chain:${this.customerInListSelector}`);
  }

  get itemInMiniCart() {
    return $(`-ios class chain:${this.itemInMiniCartSelector}`);
  }

  get searchCustomerField() {
    return $("~io.tulip.sat.customers.search");
  }

  async inputCustomerInfo(customer) {
    return await this.searchCustomerField.setValue(customer);
  }

  async clickOnSelectedCustomer() {
    await this.selectCustomerInList.click();
  }
}

export default new SearchCustomerPage();
