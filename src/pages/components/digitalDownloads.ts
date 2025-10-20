import { Locator, Page } from '@playwright/test'

export class DigitalDownloads {  
    private static readonly locators = {
        addToCartBtns : `[value="Add to cart"]`,
        products: `h2.product-title a`
    };
    private addToCartBtns: Locator
    private products: Locator

    constructor(page: Page) {
        this.addToCartBtns = page.locator(DigitalDownloads.locators.addToCartBtns)
        this.products = page.locator(DigitalDownloads.locators.products)
    };

    async addToCartRandomProduct(): Promise<string> {
        const num = await this.addToCartBtns.count();
        if(num===0){
            console.log("No products available to add to cart")
        }
        const index = Math.floor(Math.random() * num);
        const product = this.products.nth(index);
        const addToCart=this.addToCartBtns.nth(index);
        await addToCart.click();
        const productName = await product.textContent();
        return productName?.trim()??''
    };
};