import { When, Then } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";
import storesPage from "../pageobjects/stores.page";
import productCategoriesPage from "../pageobjects/productCategories.page";

When("The user selects a store", async () => {
  await storesPage.selectStore();
});

Then("The user can see the main product categories", async () => {
  await expect(productCategoriesPage.accesoriesCatalog).toBeDisplayed();
  await expect(productCategoriesPage.menCatalog).toBeDisplayed();
  await expect(productCategoriesPage.womenCatalog).toBeDisplayed();
  await loginPage.logOut();
});
