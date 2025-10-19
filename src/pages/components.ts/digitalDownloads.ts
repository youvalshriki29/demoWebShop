import { Page, expect} from '@playwright/test'


export class DigitalDownloads{
    constructor(private page: Page){};
  
    private locators = {
        addToCartBtns : `[value="Add to cart"]`,
        products: `h2.product-title a`
    };

    async addToCartRandomProduct(){
        const num = await this.page.locator(this.locators.addToCartBtns).count();
        if(num===0){
            console.log("there is no products")
        };
        const index = Math.floor(Math.random() * num);
        const product = this.page.locator(this.locators.products).nth(index);
        const addToCart=this.page.locator(this.locators.addToCartBtns).nth(index);
        await addToCart.click();
        const productName = await product.textContent();
        return productName?.trim()??''
    };
};