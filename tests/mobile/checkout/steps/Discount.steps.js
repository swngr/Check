import { When, Then } from "@cucumber/cucumber";

import discountCalculationPage from "../pageobjects/discountCalculation.page";
import productCartItemPage from "../pageobjects/productCartItem.page";
import discountReasonPage from "../pageobjects/discountReason.page";
import miniCartPage from "../pageobjects/miniCart.page";
import productDetailsPage from "../pageobjects/productDetails.page";
import helper from "../utilities/helper";

When("The user goes to the item added in the mini-cart", async () => {
  await productDetailsPage.clickOnOrderButton();
  await miniCartPage.clickOnItemInMiniCart();
});

When("The user applies an item discount based on {string}", async (opt) => {
  await productCartItemPage.clickOnAddDiscountButton();
  switch (opt) {
    case "percentage":
      await discountCalculationPage.clickOnPercentageButton();
      await discountCalculationPage.clickOnKeypadKey("3.5");
      break;
    case "amount":
      await discountCalculationPage.clickOnAmountButton();
      await discountCalculationPage.clickOnKeypadKey("0.99");
      break;
  }
  await discountCalculationPage.clickOnNextButton();
  await discountReasonPage.clickOnDiscountReason();
  await discountReasonPage.clickOnApplyButton();
});

Then("The discount is shown in the order line items and the order total is updated", async () => {
  const itemOriginalPrice = await productCartItemPage.getTextOriginalPrice();
  const itemDiscountedPrice = await productCartItemPage.getTextDiscountedPrice();
  await expect(itemOriginalPrice).not.toMatch(itemDiscountedPrice);
  await productCartItemPage.clickOnDoneButton();
  await helper.logOut();
});
