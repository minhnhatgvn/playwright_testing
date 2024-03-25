// @ts-check
/* The test will verify data table on the url https://the-internet.herokuapp.com/tables:
- the url is  contain /tables
- the elements is displayed correctly : Table 1 and Table 2
- the table is sorted when clicking on the header : LastName, FirstName,Email,Due, Website
*/

const { test, expect } = require("@playwright/test");
const { DataTablePage } = require("./../pages/DataTablePage");
const { HomePage } = require("./../pages/HomePage");


test("DataTable page test", async ({ page }) => {
  const DataTable = new DataTablePage(page);
  const Home = new HomePage(page);
  await Home.goToHomePage();
  await Home.goToDataTableLink();
  await DataTable.checkDataTablePath();
  await DataTable.checkTableDisplay();
  await DataTable.lastNameSorted();
});
