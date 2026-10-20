import { test } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";

test("Home page loads", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visit();
  await homePage.verifyLoaded();
});
