import { Locator, Page } from '@playwright/test'

export interface RegisterData {
    gender?: 'male' | 'female';
    firstName: string;
    lastName: string;
    email: string;
    password: string
};

export class RegisterForm {
    private static readonly locators = {
        genderMaleCbx: `#gender-male`,
        genderFemaleCbx: `#gender-female`,
        firstNameField: `#FirstName`,
        lastNameField: `#LastName`,
        emailField: `#Email`,
        passwordField: `#Password`,
        confirmPasswordField: `#ConfirmPassword`,
        registerBtn: `#register-button`,
        continueBtn: `.register-continue-button`
    };
    private genderMaleCbx: Locator
    private genderFemaleCbx: Locator
    private firstNameField: Locator
    private lastNameField: Locator
    private emailField: Locator
    private passwordField: Locator
    private confirmPasswordField: Locator
    private registerBtn: Locator
    private continueBtn: Locator

    constructor(page: Page) {
        this.genderMaleCbx = page.locator(RegisterForm.locators.genderMaleCbx)
        this.genderFemaleCbx = page.locator(RegisterForm.locators.genderFemaleCbx)
        this.firstNameField = page.locator(RegisterForm.locators.firstNameField)
        this.lastNameField = page.locator(RegisterForm.locators.lastNameField)
        this.emailField = page.locator(RegisterForm.locators.emailField)
        this.passwordField = page.locator(RegisterForm.locators.passwordField)
        this.confirmPasswordField = page.locator(RegisterForm.locators.confirmPasswordField)
        this.registerBtn = page.locator(RegisterForm.locators.registerBtn)
        this.continueBtn = page.locator(RegisterForm.locators.continueBtn)
    };

    async registerNewUser(data:RegisterData): Promise<void> {
        await this.validateRegisterData(data)

        if(data.gender==='female'){
         await this.genderFemaleCbx.check();
        } else{
          await this.genderMaleCbx.check();
        };
        
        await this.firstNameField.fill(data.firstName);
        await this.lastNameField.fill(data.lastName);
        await this.emailField.fill(data.email);
        await this.passwordField.fill(data.password);
        await this.confirmPasswordField.fill(data.password)
        await this.registerBtn.click();
        await this.continueBtn.click();
    };

    private validateRegisterData(data:RegisterData): void {
        if(!data.firstName||!data.lastName){
            throw new Error("First name or Last name is missing")
        };
        if(!data.email.includes('@')||!data.email.includes('.com')){
            throw new Error(`Invalid email address ${data.email}`)
        };
        if(data.password.length<6){
            throw new Error("Password must be at least 6 characters long")
        };
    };
};