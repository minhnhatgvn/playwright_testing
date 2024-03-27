// @ts-check
/* The test will verify data table on the url https://the-internet.herokuapp.com/checkboxes:
- The url is  contain /checkboxes
- The elements is displayed correctly 2 checkboxes
- Able to check/uncheck the checkboxes
*/
const { test, expect } = require("@playwright/test");
const { CheckBoxPage } = require("./../pages/CheckBoxPage");
const { HomePage } = require("./../pages/HomePage");

test("Checkbox page test", async ({ page }) => {
  const CheckBox = new CheckBoxPage(page);
  const Home = new HomePage(page);
  await Home.goToHomePage();
  await Home.goToCheckBoxLink();
  await CheckBox.verifyCheckboxPage();
});
