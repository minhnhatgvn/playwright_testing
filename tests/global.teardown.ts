import { test, expect } from "./test-setup.spec.ts";


test("Teardown", async ({ page }) => {
    await page.close();
    console.log("tearing down")
});
