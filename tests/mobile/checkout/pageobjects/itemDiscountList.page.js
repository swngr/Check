class ItemDiscountListPage {
  get chevronIcon() {
    return $("~chevron");
  }

  async clickOnChevronIcon() {
    await this.chevronIcon.click();
  }
}

export default new ItemDiscountListPage();
