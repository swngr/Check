class ProductCategoriesPage {
  get accesoriesCatalog() {
    return $("~Accessories");
  }

  get menCatalog() {
    return $("~Men's");
  }

  get womenCatalog() {
    return $("~Women's");
  }

  async clickOnAccessories() {
    await this.accesoriesCatalog.click();
  }
}

export default new ProductCategoriesPage();
