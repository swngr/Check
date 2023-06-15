import config from "./wdio.shared.sauce.conf";

process.env.testing_env = "ios.sauce";

const buildName = `WDIO - Cucumber - iOS Simulators: ${new Date().getTime()}`;

config.specs = ["./tests/mobile/**/features/**/*.feature"];
config.cucumberOpts.require = ["./tests/mobile/**/steps/**/*.steps.js"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
  {
    platformName: "iOS",
    "appium:deviceName": process.env.DEVICE_NAME,
    "appium:platformVersion": process.env.PLATFORM_VERSION,
    "appium:automationName": "XCUITest",
    // The path to the app
    "appium:app": process.env.APP_STORAGE,
    "appium:processArguments": {
      env: {
        "com.tulip.checkout.complete#debug_info": "SHOW",
        bundleID: process.env.BUNDLE_ID,
        cluster: process.env.TENANT,
        EncodedConfiguration: process.env.QRCODE,
      },
    },
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    "appium:newCommandTimeout": 240,
    "appium:fullContextList": true,
    // Always default the language to a language you prefer so you know the app language is always as expected
    "appium:language": "en",
    "appium:locale": "en",
    // Sauce Labs specific options
    "sauce:options": {
      // Group builds by build name
      build: buildName,
    },
  },
];

config.maxInstances = 25;

exports.config = config;
