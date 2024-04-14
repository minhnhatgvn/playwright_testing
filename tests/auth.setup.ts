import { test, expect } from '@playwright/test';

const authFile = "playwright/.auth/user.json";

test('authenticates', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByText('You logged out of the secure').click();

  await page.context().storageState({ path: authFile });
});