const { DataTablePage } = require("./../pages/DataTablePage");
const { HomePage } = require("./../pages/HomePage");
const { CheckBoxPage } = require("./../pages/CheckBoxPage");
import { test as base } from "@playwright/test";

type MyFixtures = {
  homePage: HomePage;
  datatablePage: DataTablePage;
  checkboxPage: CheckBoxPage;
};
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  datatablePage: async ({ page }, use) => {
    await use(new DataTablePage(page));
  },

  checkboxPage: async ({ page }, use) => {
    await use(new CheckBoxPage(page));
  }
});

export { expect } from "@playwright/test";
