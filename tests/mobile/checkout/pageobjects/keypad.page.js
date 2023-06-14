class KeypadPage {
  get numberOne() {
    return $("~aeKeypadKey1");
  }

  get numberTwo() {
    return $("~aeKeypadKey2");
  }

  get numberThree() {
    return $("~aeKeypadKey3");
  }

  get numberFour() {
    return $("~aeKeypadKey4");
  }

  get numberFive() {
    return $("~aeKeypadKey5");
  }

  get numberSix() {
    return $("~aeKeypadKey6");
  }

  get numberSeven() {
    return $("~aeKeypadKey7");
  }

  get numberEight() {
    return $("~aeKeypadKey8");
  }

  get numberNine() {
    return $("~aeKeypadKey9");
  }

  get numberZero() {
    return $("~aeKeypadKey0");
  }

  get decimal() {
    return $("~aeKeypadKeyDecimal");
  }

  async clickOnNumberOne() {
    await this.numberOne.click();
  }
  async clickOnNumberTwo() {
    await this.numberTwo.click();
  }
  async clickOnNumberThree() {
    await this.numberThree.click();
  }
  async clickOnNumberFour() {
    await this.numberFour.click();
  }
  async clickOnNumberFive() {
    await this.numberFive.click();
  }
  async clickOnNumberSix() {
    await this.numberSix.click();
  }
  async clickOnNumberSeven() {
    await this.numberSeven.click();
  }
  async clickOnNumberEight() {
    await this.numberEight.click();
  }
  async clickOnNumberNine() {
    await this.numberNine.click();
  }
  async clickOnNumberZero() {
    await this.numberZero.click();
  }
  async clickOnDecimal() {
    await this.decimal.click();
  }

  async tapKeypadKey(value) {
    switch (value) {
      case "1":
        await this.clickOnNumberOne();
        break;
      case "2":
        await this.clickOnNumberTwo();
        break;
      case "3":
        await this.clickOnNumberThree();
        break;
      case "4":
        await this.clickOnNumberFour();
        break;
      case "5":
        await this.clickOnNumberFive();
        break;
      case "6":
        await this.clickOnNumberSix();
        break;
      case "7":
        await this.clickOnNumberSeven();
        break;
      case "8":
        await this.clickOnNumberEight();
        break;
      case "9":
        await this.clickOnNumberNine();
        break;
      case "0":
        await this.clickOnNumberZero();
        break;
      case ".":
      case ",":
        await this.clickOnDecimal();
        break;

      default:
        break;
    }
  }
}

export default new KeypadPage();
