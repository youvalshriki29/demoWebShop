import { Page } from '@playwright/test'


export class DigitalDownloads {
    constructor(private page: Page) {};
  
    private static readonly locators = {
        addToCartBtns : `[value="Add to cart"]`,
        products: `h2.product-title a`
    };

    async addToCartRandomProduct() {
        const num = await this.page.locator(DigitalDownloads.locators.addToCartBtns).count();
        if(num===0){
            console.log("No products available to add to cart")
        }
        const index = Math.floor(Math.random() * num);
        const product = this.page.locator(DigitalDownloads.locators.products).nth(index);
        const addToCart=this.page.locator(DigitalDownloads.locators.addToCartBtns).nth(index);
        await addToCart.click();
        const productName = await product.textContent();
        return productName?.trim()??''
    };
};