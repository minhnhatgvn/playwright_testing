import { test } from "@playwright/test";


test("Teardown", async ({ page }) => {
    await page.close();
    console.log("tearing down")
});
