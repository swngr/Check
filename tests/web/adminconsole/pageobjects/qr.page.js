import Page from "./page";
/** @typedef {import('webdriverio').Element<"async">} Element */

class QrPage extends Page {
  /** @type Element */
  get title() {
    return $('//*[@class="page-header"]');
  }

  /** @type Element */
  get qrImage() {
    return $('//*[@class="qr-code"]');
  }

  /** @type Element */
  get downloadButton() {
    return $('//*[@class="btn btn-primary btn-xs"]');
  }
}

export default new QrPage();
