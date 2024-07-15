import { test, expect } from "@playwright/test";
import exp from "constants";

// test ('Verificar que la página es accesible', async({page})=>{
//   await page.goto('http://localhost:4100')
// })

test.beforeEach(async ({ page }) => {
  await page.goto("http://192.168.1.9:8080/Localizadores.html");
});

test("Get by Role", async ({ page }) => {
  // await page.goto("http://192.168.1.9:8080/Localizadores.html");
  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
  await page.getByRole("checkbox", { name: "Subscribe" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
});

test("Get by Label", async ({ page }) => {
  await page.getByLabel("Password").fill("Secreto");
});

test("Get by Placeholder", async ({ page }) => {
  await page.getByPlaceholder("name@example.com").fill("test@test.com");
});

test("Get by Text", async ({ page }) => {
  // Buscar por texto
  await expect(page.getByText("Welcome, john")).toBeVisible();
  // Buscar por texto exacto
  await expect(page.getByText("Welcome, John", { exact: true })).toBeVisible();
  // Buscar por texto y validar que contenga alguna palabra en el string sin importar minúscula o mayúscula 
  await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
});

test ("Get by AltText", async ({page}) => {
  // Buscar por texto alterno del elemento
  await page.getByAltText('playwright logo').click();
})

test ("Get by Title", async ({page}) => {
  // Buscar por título del elemento
  await expect (page.getByTitle('Issues count')).toHaveText("25 issues");
})
