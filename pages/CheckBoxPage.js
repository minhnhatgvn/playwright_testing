const { expect } = require("@playwright/test");
const { HomePage } = require("./HomePage");

exports.CheckBoxPage = class CheckBoxPage {
  constructor(page) {
    this.page = page;
    this.pageHeading = page.getByRole("heading", { name: "Checkboxes" });
    this.firstCheckbox = page.getByRole("checkbox").first();
    this.secondCheckbox = page.getByRole("checkbox").nth(1);
    this.firstCheckboxLabel = page.getByText("checkbox 1");
    this.secondCheckboxLabel = page.getByText("checkbox 2");
  }

  // Action on checkbox page
  async checkFirstCheckBox() {
    await this.firstCheckbox.check();
  }

  //Assertion on checkbox page
  async verifyCheckboxPage() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.firstCheckboxLabel).toBeVisible();
    await expect(this.secondCheckboxLabel).toBeVisible();
    this.checkFirstCheckBox();
    await expect(this.firstCheckbox).toBeChecked();
    await expect(this.secondCheckbox).toBeChecked();
  }
};
