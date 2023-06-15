//const { generate } = require('multiple-cucumber-html-reporter');
import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import * as dotenv from "dotenv";
dotenv.config();

import { createCustomCommands } from "../custom_commands/custom_commands";

/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
export const config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: "local",
  // ==================
  // Specify Test Files
  // ==================
  specs: [],
  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "debug",
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "",
  waitforTimeout: 45000,
  // A timeout of 3 min
  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,
  framework: "cucumber",
  // Added the `cucumberjs-json`, see
  // https://github.com/wswebcreation/wdio-cucumberjs-json-reporter
  reporters: ["spec", "cucumberjs-json"],
  // If you are using Cucumber you need to specify the location of your step definitions.
  // See https://webdriver.io/docs/frameworks.html#using-cucumber for more information about the properties
  cucumberOpts: {
    backtrace: false,
    // requireModule: ['@babel/register'],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    format: ["pretty"],
    // <boolean> Enable this config to treat undefined definitions as warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios withtags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: "not @Pending",
    // <number> timeout for step definitions
    timeout: 60000,
  },

  // ========
  // Services
  // ========
  services: [],

  // =====
  // Hooks
  // =====
  onPrepare: () => {
    const required_envs = {
      "ios.local": ["BUNDLE_ID", "QRCODE", "TENANT", "APP", "DEVICE_NAME", "PLATFORM_VERSION"],
      "web.local": ["AC_URL", "AC_USERNAME", "AC_PASSWORD", "AC_AUTH_SECRET"],
      "ios.sauce": [
        "BUNDLE_ID",
        "QRCODE",
        "TENANT",
        "APP_STORAGE",
        "DEVICE_NAME",
        "PLATFORM_VERSION",
        "SAUCE_USERNAME",
        "SAUCE_ACCESS_KEY",
      ],
      "web.sauce": [
        "AC_URL",
        "AC_USERNAME",
        "AC_PASSWORD",
        "AC_AUTH_SECRET",
        "SAUCE_USERNAME",
        "SAUCE_ACCESS_KEY",
      ],
    };
    const env = process.env.testing_env;

    if (env === undefined || required_envs[env] === undefined) {
      throw new Error("Undefined testing environment");
    }

    if (!required_envs[env].every((el) => process.env[el])) {
      const env_stat = required_envs[env].reduce((o, k) => {
        o[k] = process.env[k] === undefined ? null : process.env[k];
        return o;
      }, {});
      throw new Error(
        `Required environment variables were not set for given test environment: ${env}
        ${JSON.stringify(env_stat, null, 2)}`
      );
    }
  },
  before: (capabilities, specs, driver) => {
    createCustomCommands(driver);
  },
  beforeFeature: async () => {
    const envConf = config.capabilities[0]["appium:processArguments"].env;
    const clusterLocator = `~${envConf.cluster}`;
    const allowOnceLocator = $("~Allow Once");
    const cancelButton = $("~Cancel");
    const welcomeMessage = $("~Welcome to Tulip");

    // Tap Allow once for GPS Localization
    if (await allowOnceLocator.isDisplayedWithin(3000)) {
      await allowOnceLocator.touchAction("tap");
    } // Cancel "Turn On Location Services" Notification
    if (await cancelButton.isDisplayedWithin(3000)) {
      await cancelButton.touchAction("tap");
    }

    await driver.switchContext("NATIVE_APP");
    await expect(welcomeMessage.getText()).toBeTruthy();

    let el = await driver.$(clusterLocator);
    if (el.isDisplayed()) {
      el.touchAction("tap");
    }
  },
  afterStep: async (test, context, { passed }) => {
    if (!passed) {
      const env = process.env.testing_env;
      const dir = ".tmp/png/";
      const fileName = `${test.text
        .replace(/\s+/g, "_")
        .replace(/\W/g, "")}.${env}.${new Date().getTime()}.png`;
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      await driver.saveScreenshot(join(dir, fileName));
    }
  },
  /*
  onComplete: () => {
    // Generate the report when it all tests are done
    generate({
      // Required
      // This part needs to be the same path where you store the JSON files
      // default = '.tmp/json/'
      jsonDir: '.tmp/json/',
      reportPath: '.tmp/report/',
      // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    });
  },
  */
};
