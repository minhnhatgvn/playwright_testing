import { test, expect } from "@playwright/test";

test("get single user", async ({ request }) => {
  const res = await request.get(`https://reqres.in/api/user/2`);
  expect(res.ok()).toBeTruthy();

  const resJSON = await res.json();
  console.log(resJSON);

  // verification
  expect(res.status()).toBe(200);
  expect(resJSON.data.name).toBe("fuchsia rose");
  expect(resJSON.support.url).toBe("https://reqres.in/#support-heading");
});
