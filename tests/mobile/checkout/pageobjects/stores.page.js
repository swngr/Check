class StoresPage {
  get storesList() {
    return $("~ic login menu");
  }

  get storeFromList() {
    return $("~Columbus Circle (store-columbus-circle)");
  }

  get continueOption() {
    return $('//*[@name="Continue"]');
  }

  get okNotification() {
    return $("~OK");
  }

  async selectStore() {
    await this.storesList.click();
    await this.storeFromList.click();
    await this.continueOption.click();
    while (await this.okNotification.isDisplayed()) {
      await this.okNotification.touchAction("tap");
    }
  }
}

export default new StoresPage();
