import { test, expect } from "@playwright/test";

test("get single user", async ({ request }) => {
  const res = await request.get(`https://reqres.in/api/user/2`);
  expect(res.ok()).toBeTruthy();
});