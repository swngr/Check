import storesPage from "../pageobjects/stores.page";
import productCategoriesPage from "../pageobjects/productCategories.page";
import productCategoriesListPage from "../pageobjects/productCategoriesList.page";
import productCategoriesItemsPage from "../pageobjects/productCategoriesItems.page";
import miniCartPage from "../pageobjects/miniCart.page";
import orderCompletePage from "../pageobjects/orderComplete.page";
import remotePaymentPage from "../pageobjects/remotePayment.page";
import loginPage from "../pageobjects/login.page";

const driver = global.driver;
class Helper {
  async existingBagOrder(text) {
    await storesPage.selectStore();
    await productCategoriesPage.clickOnAccessories();
    await productCategoriesListPage.clickOnBags();
    await productCategoriesItemsPage.clickOnBagItem(text);
  }

  async successfulOrderComplete() {
    await this.waitForCartUpdate();
    const orderCompleteMessage = await orderCompletePage.getTextOrderComplete();
    await expect(orderCompleteMessage).toBeTruthy();
    await orderCompletePage.clickOnDoneButton();
  }

  async successfulRemotePayment() {
    await this.waitForCartUpdate();
    const remotePaymentMessage = await remotePaymentPage.getTextRemotePayConfirmation();
    await expect(remotePaymentMessage).toBeTruthy();
    await remotePaymentPage.clickOnDoneButton();
  }

  async logOut() {
    await miniCartPage.clickOnDismissMiniCart();
    await loginPage.logOut();
  }

  // Wait for the overlay informing the user that the Cart is undergoing changes.
  async waitForCartUpdate() {
    await driver.pause(3000);
  }
}
export default new Helper();
