import { Then, When } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";
import storesPage from "../pageobjects/stores.page";

When("The user logs in with valid credentials", async () => {
  await loginPage.loginWithValidCredentials();
});

Then("The user can see the stores list", async () => {
  await expect(storesPage.storesList).toBeDisplayed();
});
