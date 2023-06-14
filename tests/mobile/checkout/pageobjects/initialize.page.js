import { config } from "../../../../config/wdio.ios.conf";

const envConf = config.capabilities[0]["appium:processArguments"].env;
const appId = envConf.bundleID;

const driver = global.driver;

class InitializePage {
  async SetUp() {
    await driver.terminateApp(appId);
    await driver.launchApp();
  }

  async TearDown() {
    await driver.terminateApp(appId);
  }
}

export default new InitializePage();
