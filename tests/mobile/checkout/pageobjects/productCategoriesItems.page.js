class ProductCategoriesItemsPage {
  bagItem(name) {
    // ios class chain selector
    // const bagSelector = `**/XCUIElementTypeStaticText[\`label == "${name}"\`]`;
    // return $(`-ios class chain:${bagSelector}`);

    const bagSelector = `type == 'XCUIElementTypeStaticText' && label == "${name}"`
    return $(`-ios predicate string:${bagSelector}`);
  }

  async clickOnBagItem(name) {
    await this.bagItem(name).click();
  }
}

export default new ProductCategoriesItemsPage();
