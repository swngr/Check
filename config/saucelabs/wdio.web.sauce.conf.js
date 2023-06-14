import config from "./wdio.shared.sauce.conf";

process.env.testing_env = "web.sauce";

const defaultBrowserSauceOptions = {
  build: `WDIO - Cucumber - Web build: ${new Date().getTime()}`,
  screenResolution: "1600x1200",
};

config.specs = ["./tests/web/**/features/**/*.feature"];
config.cucumberOpts.require = ["./tests/web/**/steps/**/*.steps.js"];

config.capabilities = [
  {
    browserName: "chrome",
    platformName: "macOS 12",
    browserVersion: "latest",
    "sauce:options": {
      ...defaultBrowserSauceOptions,
    },
  },
];
exports.config = config;
