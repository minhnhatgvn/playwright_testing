// @ts-check
const { test, expect } = require("@playwright/test");
const { CheckBoxPage } = require("./../pages/CheckBoxPage");
const { HomePage } = require("./../pages/HomePage");

test("Checkbox page test", async ({ page }) => {
  const CheckBox = new CheckBoxPage(page);
  const Home = new HomePage(page);
  await Home.goToHomePage();
  await Home.goToCheckBoxLink();
  await CheckBox.checkFirstCheckBox();
});
