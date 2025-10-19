import { Page, expect} from '@playwright/test'


export class DigitalDownloads{
    constructor(private page: Page){}
  
    private locators = {
        products : `[value="Add to cart"]`
    }

    async addToCartRandomProduct(){
        const num = await this.page.locator(this.locators.products).count();
        if(num===0){
            console.log("there is no products")
        }
        const index = Math.floor(Math.random() * num);
        const product = this.page.locator(this.locators.products).nth(index);
        await product.click();
        return await product.textContent()
    }
}