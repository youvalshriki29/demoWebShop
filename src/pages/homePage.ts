import { Page, expect} from '@playwright/test'

export class HomePage {
    constructor(private page:Page) {}
    private static readonly locators = {
        registerBtn: `.ico-register`,
        userEmailHeader: `.header-links a[href="/customer/info"]`,
        digitalDownloadsBtn: `.top-menu a[href="/digital-downloads"]`,
        shoppingCartBtn: `#topcartlink`
    };

    async openRegisterForm() {
        await this.page.click(HomePage.locators.registerBtn);
    };

    async validateUserEmailIsDisplayed(userEmail:string) {
        await expect(this.page.locator(HomePage.locators.userEmailHeader)).toHaveText(userEmail);
    };

    async openDigitalDownloads() {
        await this.page.click(HomePage.locators.digitalDownloadsBtn);
    };

    async openShoppingCart() {
        await this.page.click(HomePage.locators.shoppingCartBtn);
    };
};