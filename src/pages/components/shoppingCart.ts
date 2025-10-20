import { Page, expect} from '@playwright/test'

export class ShoppingCart {
    constructor(private page: Page) {}
    private static readonly locators = {
        productName: `.product-name`
    };

    async validateProductInCart(productAddedToCart:string) {
       await expect(this.page.locator(ShoppingCart.locators.productName)).toHaveText(productAddedToCart);
    };
};