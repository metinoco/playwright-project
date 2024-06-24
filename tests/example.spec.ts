import { test, expect } from "@playwright/test";
import exp from "constants";

// test ('Verificar que la página es accesible', async({page})=>{
//   await page.goto('http://localhost:4100')
// })

test("Get by Role", async ({ page }) => {
  await page.goto("http://192.168.1.9:8080/Localizadores.html");
  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
  await page.getByRole("checkbox", { name: "Subscribe" }).check();
  await page.getByRole("button", {name: "Submit"}).click()
});

test ("Get by Label", async({ page }) => {
  await page.goto("http://192.168.1.9:8080/Localizadores.html");
  await page.getByLabel("Password").fill('Secreto')
})
