import { test, expect } from "@playwright/test";

test.describe("my-test", () => {
  test("Check the title of the todo app", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    // await expect(page).toHaveTitle("React • TodoMVC");

    await expect(page).toHaveTitle(/.*TodoMVC$/);
    await expect(page.getByText("todos")).toHaveRole("heading");
  });
});
