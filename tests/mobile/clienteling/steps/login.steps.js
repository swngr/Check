import { Given, Then, When } from "@cucumber/cucumber";
import { config } from "../../../../config/wdio.ios.conf";

/** @typedef {import('webdriverio').Browser<'async'>} Driver */
/** @typedef {import('webdriverio').Element<"async">} Element */
/** @typedef {import('@wdio/protocols').Context} Context */

/** @type Driver */
const driver = global.driver;

Given(/^I launch the clienteling app$/, async () => {
  const envConf = config.capabilities[0]["appium:processArguments"].env;
  const appId = envConf.bundleID;

  await driver.terminateApp(appId);
  await driver.launchApp();
});

When(/^I am on Workspace$/, async () => {
  const envConf = config.capabilities[0]["appium:processArguments"].env;
  const clusterLocator = `~${envConf.cluster}`;

  await driver.switchContext("NATIVE_APP");

  let el = await driver.$(clusterLocator);
  if (el.isDisplayed()) {
    el.touchAction("tap");
  }
});

Then(/^I should be able to login with Kim$/, async () => {
  const loc_loginForm_username = '//*[@id="username"]';
  const loc_loginForm_password = '//*[@id="password"]';
  const loc_webLink_login = "login";
  const loc_buttons_loginButton = '//*[@id="loginButton"]';
  const loc_buttons_submit = "button.login100-form-btn";

  /** @type Context */
  let context = await driver.getContextByUrl(loc_webLink_login);
  await driver.switchContext(context.id);

  /** @type Element */
  const el_buttons_loginButton = await driver.$(loc_buttons_loginButton);
  await el_buttons_loginButton.waitForDisplayed({ timeout: 45000 });

  const el_loginForm_username = await driver.$(loc_loginForm_username);
  const el_loginForm_password = await driver.$(loc_loginForm_password);
  const el_buttons_submit = await driver.$(loc_buttons_submit);

  await el_loginForm_username.setValue("Kim");
  await el_loginForm_password.setValue("Kim");

  await el_buttons_submit.click();

  await driver.switchContext("NATIVE_APP");
  await driver.pause(10000);
});

When(/^I search for Automation User in All Customer tab$/, async () => {
  console.log("Log When: I search for Automation User in All Customer tab");
});

Then(/^I should see Automation User in the search results$/, async () => {
  console.log("Log Then: I should see Automation User in the search results");
});
