import { config } from "./wdio.shared.conf";

process.env.testing_env = "ios.local";

config.specs = ["./tests/mobile/**/features/**/*.feature"];
config.cucumberOpts.require = ["./tests/mobile/**/steps/**/*.steps.js"];

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
  [
    "appium",
    {
      // This will use the globally installed version of Appium
      command: "appium",
      args: {
        // This is needed to tell Appium that we can execute local ADB commands
        // and to automatically download the latest version of ChromeDriver
        relaxedSecurity: true,
        address: "localhost",
        // Write the Appium logs to a file in the root of the directory
        log: "./appium.log",
      },
    },
  ],
]);

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "iOS",
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    "appium:deviceName": process.env.DEVICE_NAME,
    "appium:platformVersion": process.env.PLATFORM_VERSION,
    "appium:automationName": "XCUITest",
    // The path to the app
    "appium:app": process.env.APP,
    "appium:processArguments": {
      env: {
        "com.tulip.checkout.complete#debug_info": "SHOW",
        bundleID: process.env.BUNDLE_ID,
        cluster: process.env.TENANT,
        EncodedConfiguration: process.env.QRCODE,
      },
    },
    "appium:newCommandTimeout": 240,
    "appium:fullContextList": true,
    "appium:language": "en",
    "appium:locale": "en",
  },
];

//
// =====================
// Server Configurations
// =====================
//
config.port = 4723;

exports.config = config;
