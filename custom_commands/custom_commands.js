/** @typedef {import('webdriverio').Browser<'async'>} Driver */

/**
 * @param {Number} timeout
 */
async function isDisplayedWithin(timeout) {
  try {
    await this.waitForDisplayed({ timeout: timeout });
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * @param {String} url
 * @param {Number} timeout time in ms (default: 30000)
 */
async function getContextByUrl(url, timeout = 30000) {
  let ctx;
  await this.waitUntil(
    async () => {
      ctx = (await this.getContexts())
        .filter((ctx) => !ctx.id.includes("NATIVE_APP"))
        .find((ctx) => ctx.url.includes(url));
      return ctx !== undefined;
    },
    {
      timeout: timeout,
      timeoutMsg: "unable to get context",
    }
  );
  return ctx;
}

/**
 * @param {Driver} driver
 */
function createCustomCommands(driver) {
  driver.addCommand("isDisplayedWithin", isDisplayedWithin, true);
  driver.addCommand("getContextByUrl", getContextByUrl, false);
}

export { createCustomCommands };
