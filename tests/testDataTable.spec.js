// @ts-check
/* The test will verify data table on the url https://the-internet.herokuapp.com/tables:
- the url is  contain /tables
- the elements is displayed correctly : Table 1 and Table 2
- the table is sorted when clicking on the header : LastName, FirstName,Email,Due, Website
*/

import { test, expect } from "./test-setup.spec.ts";

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test("DataTable page test", async ({ datatablePage, homePage }) => {
  await homePage.goToHomePage();
  await homePage.goToDataTableLink();
  await datatablePage.checkDataTablePath();
  await datatablePage.checkTableDisplay();
  await datatablePage.lastNameSorted();
});
