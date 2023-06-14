import { Given, When, Then } from "@cucumber/cucumber";
import productDetailsPage from "../pageobjects/productDetails.page";
import miniCartPage from "../pageobjects/miniCart.page";
import paymentPage from "../pageobjects/payment.page";
import cashDrawerPage from "../pageobjects/cashDrawer.page";
import cashAmountPage from "../pageobjects/cashAmount.page";
import searchCustomerPage from "../pageobjects/searchCustomer.page";
import remotePaymentPage from "../pageobjects/remotePayment.page";
import splitAmountPage from "../pageobjects/splitAmount.page";
import helper from "../utilities/helper";

Given("The user has an existing order {string}", async (string) => {
  if (string === "in store") {
    await helper.existingBagOrder("Baggu Canvas Retail Tote");
    await productDetailsPage.clickOnBuyNowButton();
  } else if (string === "for delivery") {
    await helper.existingBagOrder("Baggu Circle Wallet");
    await productDetailsPage.clickOnOrderForDeliveryButton();
  }
});

When("The user goes to check out", async () => {
  const itemDisplayedInProdDetails = await productDetailsPage.getTextProdDetailsItemName();
  await productDetailsPage.clickOnOrderButton();
  const itemDisplayedInMiniCart = await miniCartPage.getTextItemNameInMiniCart();
  await expect(itemDisplayedInProdDetails).toMatch(itemDisplayedInMiniCart);
  await miniCartPage.clickOnCheckOutButton();
});

When("The user selects a customer and goes to check out", async () => {
  const itemDisplayedInProdDetails = await productDetailsPage.getTextProdDetailsItemName();
  await productDetailsPage.clickOnOrderButton();
  await helper.waitForCartUpdate();
  const itemDisplayedInMiniCart = await miniCartPage.getTextItemNameInMiniCart();
  await expect(itemDisplayedInProdDetails).toMatch(itemDisplayedInMiniCart);
  await miniCartPage.clickOnSelectCustomerField();
  await searchCustomerPage.inputCustomerInfo("Alan Walker");
  await searchCustomerPage.clickOnSelectedCustomer();
  await helper.waitForCartUpdate();
  await miniCartPage.clickOnCheckOutButton();
});

When("The user pays using debit", async () => {
  await helper.waitForCartUpdate();
  await paymentPage.clickOnDebitMethod();
});

When("The user pays using cash", async () => {
  await helper.waitForCartUpdate();
  await paymentPage.clickOnCashMethod();
  await cashDrawerPage.clickOnCashDrawerOption();
  await cashDrawerPage.clickOnNextButton();
  const balanceToPay = await paymentPage.getTextBalanceToPayTotal();
  await cashAmountPage.inputCurrentBalanceToPay(balanceToPay);
  const currentBalance = balanceToPay;
  await cashAmountPage.clickOnNextButton();
  await cashAmountPage.clickOnConfirmAmountButton();
  const amountPaid = await cashAmountPage.getTextForCashAmountPaid();
  await cashAmountPage.verifyChangeDue("$0.00");
  await expect(currentBalance).toMatch(amountPaid);
  await cashAmountPage.clickOnConfirmButton();
});

When("The user pays using remote pay", async () => {
  await helper.waitForCartUpdate();
  await paymentPage.clickOnRemotePayMethod();
  await remotePaymentPage.clickOnSendButton();
});

When("The user pays using remote pay via sms", async () => {
  await helper.waitForCartUpdate();
  await paymentPage.clickOnRemotePayViaSms();
  await remotePaymentPage.clickOnSendButton();
});

When("The user splits the payment", async () => {
  await helper.waitForCartUpdate();
  await paymentPage.clickOnSplitOption();
  const balanceRemaining = await paymentPage.getTextBalanceToPayTotal();
  //Remove non-numeric chars
  const balanceRemainingStr = balanceRemaining.replace(/[^\d.-]/g, "");
  const newBalance = balanceRemainingStr - "1";
  //Two decimal places
  const roundedBalance = Math.round((newBalance + Number.EPSILON) * 100) / 100;
  await splitAmountPage.inputCurrentBalanceToPay(roundedBalance);
  await splitAmountPage.clickOnNextButton();
  await helper.waitForCartUpdate();
  await paymentPage.clickOnCashMethod();
  await cashDrawerPage.clickOnCashDrawerOption();
  await cashDrawerPage.clickOnNextButton();
  const balanceToPay = await paymentPage.getTextBalanceToPayTotal();
  await splitAmountPage.inputCurrentBalanceToPay(balanceToPay);
  await splitAmountPage.clickOnNextButton();
  await splitAmountPage.clickOnConfirmAmountButton();
  const amountPaid = await splitAmountPage.getTextCashAmountPaid();
  await expect(balanceToPay).toMatch(amountPaid);
  await splitAmountPage.clickOnConfirmButton();
  await splitAmountPage.clickOnPayRemainderButton();
  await helper.waitForCartUpdate();
  await paymentPage.clickOnDebitMethod();
});

Then("The user gets a successful message after {string}", async (string) => {
  switch (string) {
    case "paying by debit":
    case "paying by cash":
    case "split payment":
      await helper.successfulOrderComplete();
      await helper.logOut();
      break;
    case "using remote pay by email":
    case "using remote pay by sms":
      helper.successfulRemotePayment();
      await helper.logOut();
      break;
  }
});
