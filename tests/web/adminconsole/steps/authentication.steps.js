import { Given, Then, When } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";
import mainPage from "../pageobjects/main.page";

Given(/^I open the login page$/, async () => {
  await loginPage.open();
});

When(/^I use the credentials$/, async () => {
  await loginPage.login();
  await mainPage.waitForMainPageToLoad();
});

Then(/^I should be able to see the main page$/, async () => {
  const welcomeTextMessage = await mainPage.getWelcomeTextMessage();
  await expect(welcomeTextMessage).toEqual("Welcome to Tulip Self-Serve Tools");
});
