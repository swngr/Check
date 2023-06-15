import { config } from "./wdio.shared.conf";

process.env.testing_env = "web.local";

config.specs = ["./tests/web/**/features/**/*.feature"];
config.cucumberOpts.require = ["./tests/web/**/steps/**/*.steps.js"];

//
// ======
// ChromeDriver
// ======
//
config.services = (config.services ? config.services : []).concat([
  [
    "chromedriver",
    {
      logFileName: "wdio-chromedriver.log",
    },
  ],
]);

// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["--no-sandbox", "--headless"],
    },
  },
];

exports.config = config;
