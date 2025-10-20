import { Locator, Page, expect} from '@playwright/test'
import { ShoppingCart } from './components/shoppingCart';

export class HomePage {
    private static readonly locators = {
        registerBtn: `.ico-register`,
        userEmailHeader: `.header-links a[href="/customer/info"]`,
        digitalDownloadsBtn: `.top-menu a[href="/digital-downloads"]`,
        shoppingCartBtn: `#topcartlink`
    };
    private registerBtn: Locator
    private userEmailHeader: Locator
    private digitalDownloadsBtn: Locator
    private shoppingCartBtn: Locator

    constructor(page:Page) {
        this.registerBtn = page.locator(HomePage.locators.registerBtn)
        this.userEmailHeader = page.locator(HomePage.locators.userEmailHeader)
        this.digitalDownloadsBtn = page.locator(HomePage.locators.digitalDownloadsBtn)
        this.shoppingCartBtn = page.locator(HomePage.locators.shoppingCartBtn)
    };

    async openRegisterForm(): Promise<void> {
        await this.registerBtn.click();
    };

    async validateUserEmailIsDisplayed(userEmail:string): Promise<void> {
        await expect(this.userEmailHeader).toHaveText(userEmail);
    };

    async openDigitalDownloads(): Promise<void> {
        await this.digitalDownloadsBtn.click();
    };

    async openShoppingCart(): Promise<void> {
        await this.shoppingCartBtn.click();
    };
};