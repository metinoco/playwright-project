import {test, expect} from '@playwright/test';

test ('C1 - Registro de usuario', async ({page}) => {
    await page.goto ('https://www.automationexercise.com/');
    //waitForLoadState -- Espera que termine los request del backend
    await page.waitForLoadState();
    await expect(page).toHaveTitle('Automation Exercise');  
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
    await page.getByPlaceholder('Name').fill('John Doe');
    const numero = Math.floor(Math.random() * 1000)
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(`IamJohnDoe${numero}@example.com`)
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect (page.getByText('Enter Account Information')).toBeVisible();
    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password *').fill('123456*');
    await page.locator('#days').selectOption('10');
    await page.locator('#months').selectOption('June');
    await page.locator('#years').selectOption('1990');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from').check();
    await page.getByLabel('First name').fill('John');
    await page.getByLabel('Last name *').fill('Doe');
    await page.getByLabel('Company', { exact: true }).fill('Some Company');
    await page.getByLabel('Address * (Street address, P.').fill('1234 Main St');
    await page.getByLabel('Address 2').fill('Apt 123');
    await page.getByLabel('Country *').selectOption('United States');
    await page.getByLabel('State *').fill('Texas');
    await page.getByLabel('City').fill('Montreal');
    await page.locator('#zipcode').fill('12345');
    await page.getByLabel('Mobile Number *').fill('12345678');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page.getByText('Logged in as John Doe')).toBeVisible();
    await page.getByRole('link', { name: 'Delete Account' }).click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.getByRole('link', {name: 'Continue'}).click();
    // Generamos el tiempo que queremos que espere 

    await page.waitForTimeout(2000);
    
})

test ('C2 - Inicio de sesión de usuario con mail y contraseña correctos', async ({page}) => {
    await page.goto ('https://www.automationexercise.com/');
    await page.waitForLoadState();
    await expect(page).toHaveTitle('Automation Exercise');  
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('UsuarioAtenea@gmail.com');
    await page.getByPlaceholder('Password').fill('test1234');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect (page.getByText('Logged in as usuario')).toBeVisible();
    
    await page.waitForTimeout(3000);
    
})