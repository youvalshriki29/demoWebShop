import { Locator, Page, expect} from '@playwright/test'

export class ShoppingCart {
    private static readonly locators = {
        productName: `.product-name`
    };
    private productName: Locator

    constructor(page: Page) {
        this.productName = page.locator(ShoppingCart.locators.productName)
    };

    async validateProductInCart(productAddedToCart:string): Promise<void> {
       await expect(this.productName).toHaveText(productAddedToCart);
    };
};