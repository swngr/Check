import { Given, When, Then } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";
import storesPage from "../pageobjects/stores.page";
import productDetails from "../pageobjects/productDetails.page";
import productCategoriesPage from "../pageobjects/productCategories.page";
import productCategoriesListPage from "../pageobjects/productCategoriesList.page";
import productCategoriesItemsPage from "../pageobjects/productCategoriesItems.page";

Given("The user can access the main product categories on a store", async () => {
  await loginPage.loginWithValidCredentials();
  await storesPage.selectStore();
});

When("The user selects a product from the catalog", async () => {
  await productCategoriesPage.clickOnAccessories();
  await productCategoriesListPage.clickOnBags();
  await productCategoriesItemsPage.clickOnBagItem("Baggu Canvas Retail Tote");
});

Then("The user is able to see the chosen item in the Product Details page", async () => {
  const productDetailsLbl = await productDetails.getTextProductDetailsLabel();
  const displayedItemInProdDesc = await productDetails.getTextProdDetailsItemName();
  await expect(productDetailsLbl).toMatch("Product Details");
  await expect(displayedItemInProdDesc).toMatch("Baggu Canvas Retail Tote");
  await loginPage.logOut();
});
