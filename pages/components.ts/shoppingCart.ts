import { Page, expect} from '@playwright/test'

export class ShoppingCart{
    constructor(private page: Page){}
    private locators = {
        productName: `.product-name`
    }

    async validateProductInCart(productAddedToCart:string){
        expect(this.page.locator(this.locators.productName)).toHaveText(productAddedToCart);
    };
}