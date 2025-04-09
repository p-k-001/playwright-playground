import { test, expect } from "@playwright/test";

test.describe("my-test", () => {
  test("Check the title of the todo app", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    // await expect(page).toHaveTitle("React • TodoMVC");

    await expect(page).toHaveTitle(/.*TodoMVC$/);
    await expect(page.getByText("todos")).toHaveRole("heading");

    await page.getByRole("textbox").fill("dobry den");
    await page.getByRole("textbox").press("Enter");

    await page.getByRole("checkbox", { name: "Toggle Todo" }).check();

    await expect(page).toHaveScreenshot("home.png");

    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await expect(page.locator("html")).toMatchAriaSnapshot(`
        - document:
          - text: This is just a demo of TodoMVC for testing, not the
          - link "real TodoMVC app."
          - heading "todos" [level=1]
          - textbox "What needs to be done?"
          - contentinfo:
            - paragraph: Double-click to edit a todo
            - paragraph:
              - text: Created by
              - link "Remo H. Jansen"
            - paragraph:
              - text: Part of
              - link "TodoMVC"
        `);
  });
});
