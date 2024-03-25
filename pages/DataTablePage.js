const { expect } = require("@playwright/test");
const { HomePage } = require("./HomePage");
const { matchSorter } = require("match-sorter");

exports.DataTablePage = class DataTablePage {
  constructor(page) {
    this.page = page;
    this.urlPath = /.*tables/;
    this.lastNameHeader = page.locator("#table2").getByText("Last Name");
    this.table1 = page.locator("#table1");
    this.table2 = page.locator("#table2");
  }

  async clickLastName() {
    await this.lastNameHeader.click();
  }

  async lastNameSorted() {
    const LastName = await this.page.locator("td.last-name").allTextContents();
    const expectedResult = matchSorter(LastName, "");
    
    console.log(expectedResult);
    await this.clickLastName();
    const sortedLastName = await this.page
      .locator("td.last-name")
      .allTextContents();
    console.log(sortedLastName);
    expect(sortedLastName).toEqual(expectedResult);
  }

  async checkDataTablePath() {
    await expect(this.page).toHaveURL(this.urlPath);
  }

  async checkTableDisplay() {
    await expect(this.table1).toBeVisible();
    await expect(this.table2).toBeVisible();
  }
};
