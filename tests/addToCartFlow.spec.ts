import { test } from '@playwright/test';
import { TEST_USER } from '../src/config';
import { RegisterForm, DigitalDownloads, ShoppingCart, HomePage } from '@pages';

test('Register new user and add random product to cart =>', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerForm = new RegisterForm(page);
  const digitalDownloads = new DigitalDownloads(page);
  const shoppingCart = new ShoppingCart(page);
  let productName: string;

  await test.step('Navigate to home page', async () =>{
    await page.goto('/');
  });

  await test.step('Open register form', async () =>{
  await homePage.openRegisterForm();
  });

  await test.step('Register new user', async () =>{
  await registerForm.registerNewUser(TEST_USER);
  });

  await test.step('Validate email is displayed in header', async () =>{
  await homePage.validateUserEmailIsDisplayed(TEST_USER.email);
  });

  await test.step('Open digital downloads page', async () =>{
  await homePage.openDigitalDownloads();
  });

  await test.step('Add random product to cart', async () =>{
   productName = await digitalDownloads.addToCartRandomProduct();
  });

  await test.step('Open shopping cart', async () =>{
  await homePage.openShoppingCart();
  });

  await test.step('Validate product name in cart ', async () =>{
  await shoppingCart.validateProductInCart(productName);
  });

});
