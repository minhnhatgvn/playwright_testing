// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./../pages/HomePage');

test('Home Page test', async ({ page }) => {
  const Home = new HomePage(page);
  await Home.gotoHomePage();
  await Home.checkPageTitle();
  await Home.checkHeading();
  await Home.gotoCheckBoxLink();
})