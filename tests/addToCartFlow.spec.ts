import { test, expect} from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { RegisterForm ,RegisterData} from '../src/pages/components.ts/registerForm';
import { DigitalDownloads } from '../src/pages/components.ts/digitalDownloads';
import { ShoppingCart } from '../src/pages/components.ts/shoppingCart';
import { BASE_URL, TEST_USER } from '../src/config';

test('Register new user and add random product to cart =>', async ({ page }) => {
  await page.goto(BASE_URL);
  const homePage = new HomePage(page)
  const registerForm = new RegisterForm(page)
  const digitalDownloads = new DigitalDownloads(page)
  const shoppingCart = new ShoppingCart(page)
  await homePage.openRegisterForm()
  await registerForm.registerNewUser(TEST_USER)
  await homePage.validateUserEmailIsDisplayed(TEST_USER.email)
  await homePage.openDigitalDownloads()
  const productName = await digitalDownloads.addToCartRandomProduct()
  await homePage.openShoppingCart()
  await shoppingCart.validateProductInCart(productName)

});
