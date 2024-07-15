import { test, expect } from "@playwright/test";
import exp from "constants";

test.beforeEach(async ({ page }) => {
  await page.goto("http://192.168.1.9:8080/Aserciones.html");
});

test("Verificación de elementos attached", async ({ page }) => {
    await expect(page.locator('#attached')).toBeAttached();
  });