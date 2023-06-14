import { Then, When } from "@cucumber/cucumber";
import mainPage from "../pageobjects/main.page";
import qrPage from "../pageobjects/qr.page";
import themePage from "../pageobjects/theme.page";
import pagePaths from "../pageobjects/path.factory.page";

When("I open the {string} page", async (pageName) => {
  await mainPage.open(pagePaths.get(pageName));
});

Then("I see the QR page loads correctly", async () => {
  const pageTitle = await qrPage.title.getText();
  const qrImage = await qrPage.qrImage;
  const downloadButton = await qrPage.downloadButton;

  expect(pageTitle).toEqual("QR code");
  await expect(qrImage).toBeDisplayed();
  await expect(downloadButton).toBeDisplayed();
});

Then("I see the Customize Theme page loads correctly", async () => {
  const pageTitle = await themePage.title.getText();
  const subTitle = await themePage.subtitle.getText();
  const saveButton = await themePage.saveButton;
  const fontDropdown = await themePage.fontDropDown;
  const fontDropDownOptions = await themePage.fontDropDownOptions;

  expect(pageTitle).toEqual("Customize Theme");
  expect(subTitle).toEqual("Background Image URL");
  await expect(fontDropdown).toBeClickable();
  expect(fontDropDownOptions.length).toBeGreaterThan(0);
  await expect(saveButton).toBeDisplayed();
});
