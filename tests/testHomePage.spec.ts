// @ts-check
import { test, expect } from "./test-setup.spec.ts";

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test('Home Page test', async ({ homePage }) => {
  await homePage.goToHomePage();
  await homePage.checkPageTitle();
  await homePage.checkHeading();
  await homePage.goToCheckBoxLink();
})