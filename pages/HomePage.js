const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Available Examples" });
    this.checkboxes = page.getByRole("link", { name: "Checkboxes" });
    this.dataTable = page.getByRole("link", { name: "Sortable Data Tables" });
  }
  // Action on Home Page
  async goToHomePage() {
    await this.page.goto("https://the-internet.herokuapp.com/");
  }

  async goToCheckBoxLink() {
    await this.checkboxes.click();
  }

  async goToDataTableLink() {
    await this.dataTable.click();
  }

  //Assertion on Home Page
  async checkPageTitle() {
    await expect(this.page).toHaveTitle("The Internet");
  }

  async checkHeading() {
    await expect(this.heading).toHaveText("Available Examples");
  }
};
