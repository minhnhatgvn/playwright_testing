const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Available Examples" });
    this.checkboxes = page.getByRole("link", { name: "Checkboxes" });
  }
  // Action on Home Page
  async gotoHomePage() {
    await this.page.goto("https://the-internet.herokuapp.com/");
  }

  async gotoCheckBoxLink() {
    await this.checkboxes.click();
  }
  //Assertion on Home Page
  async checkPageTitle() {
    await expect(this.page).toHaveTitle("The Internet");
  }

  async checkHeading() {
    await expect(this.heading).toHaveText("Available Examples");
  }
};
