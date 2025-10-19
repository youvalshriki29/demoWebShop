import { Page, expect} from '@playwright/test'

export class HomePage{
    private locators = {
        registerBtn: `.ico-register`,
        userEmailHeader: `.header-links a[href="/customer/info"]`,
        digitalDownloadsBtn: `.top-menu a[href="/digital-downloads"]`,
        shoppingCartBtn: `#topcartlink`
    };
    constructor(private page:Page){}

    async openRegisterForm(){
        await this.page.click(this.locators.registerBtn);
    };

    async validateUserEmailIsDisplayed(userEmail:string){
        await expect(this.page.locator(this.locators.userEmailHeader)).toHaveText(userEmail);
    };

    async openDigitalDownloads(){
        await this.page.click(this.locators.digitalDownloadsBtn);
    };

    async openShoppingCart(){
        await this.page.click(this.locators.shoppingCartBtn);
    };
};