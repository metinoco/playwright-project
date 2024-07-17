import { test, expect } from "@playwright/test";
import exp from "constants";

test.beforeEach(async ({ page }) => {
  await page.goto("http://192.168.1.8:8080/Aserciones.html");
});

test("Verificación de elementos attached", async ({ page }) => {
  await expect(page.locator("#attached")).toBeAttached();
});

test("Verificación de estado de elementos", async ({ page }) => {
  const checkbox = page.locator("#checked-checkbox");
  //   await checkbox.uncheck();
  await expect(checkbox).toBeChecked();
  //Verificación negativa
  //   await expect(checkbox).not.toBeChecked();
});

test("Verificación de elementos deshabilitados", async ({ page }) => {
  const botonDeshabilitado = page.locator("#disabled-button");
  await expect(botonDeshabilitado).toBeDisabled();
});

test("Verificación de elementos editables", async ({ page }) => {
  const textboxEditable = page.locator("#editable");
  await expect(textboxEditable).toBeEditable();

  // const textboxNoEditable = page.locator("#non_editable_textbox");
  // await expect (textboxNoEditable).not.toBeEditable();
});

test("Verificación de elementos habilitados", async ({ page }) => {
  const botonHabilitado = page.locator("#enabled-button");
  await expect(botonHabilitado).toBeEnabled();
});
