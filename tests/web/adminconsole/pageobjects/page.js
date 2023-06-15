export default class Page {
  async open(path) {
    await browser.url(new URL(path, process.env.AC_URL).href);
  }
}
