class ProductCategoriesListPage {
  get bagsCatalog() {
    return $("~Bags");
  }

  async clickOnBags() {
    await this.bagsCatalog.click();
  }
}

export default new ProductCategoriesListPage();
