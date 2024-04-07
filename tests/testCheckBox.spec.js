// @ts-check
/* The test will verify data table on the url https://the-internet.herokuapp.com/checkboxes:
- The url is  contain /checkboxes
- The elements is displayed correctly 2 checkboxes
- Able to check/uncheck the checkboxes
*/
import { test, expect } from "./test-setup.spec.ts";

test("Checkbox page test", async ({ checkboxPage, homePage }) => {
  await homePage.goToHomePage();
  await homePage.goToCheckBoxLink();
  await checkboxPage.verifyCheckboxPage();
});
