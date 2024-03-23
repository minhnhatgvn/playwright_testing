const { expect } = require("@playwright/test");
const { HomePage } = require("./HomePage");

exports.CheckBoxPage = class CheckBoxPage {
  constructor(page) {
    this.page = page;
    this.checkbox = page.getByRole("checkbox").first();
  }
  async checkFirstCheckBox() {
    await this.checkbox.check();
  }
};
