import Page from "./page";
/** @typedef {import('webdriverio').Element<"async">} Element */
/** @typedef {import('webdriverio').ElementArray<"async">} ElementArray */

class ThemePage extends Page {
  /** @type Element */
  get title() {
    return $('//*[@class="page-header"]');
  }

  /** @type Element */
  get subtitle() {
    return $('//*[@class="theme-page-headers"]//h1');
  }

  /** @type Element */
  get fontDropDown() {
    return $('//*[@id="theme_app_font_name"]');
  }

  /** @type ElementArray */
  get fontDropDownOptions() {
    return this.fontDropDown.$$("//option");
  }

  /** @type Element */
  get saveButton() {
    return $('//*[@id="theme_save"]');
  }
}

export default new ThemePage();
