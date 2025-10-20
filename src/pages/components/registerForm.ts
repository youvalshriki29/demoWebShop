import { Page } from '@playwright/test'

export interface RegisterData {
    gender?: 'male' | 'female';
    firstName: string;
    lastName: string;
    email: string;
    password: string
};

export class RegisterForm {
    constructor(private page: Page) {}

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

    private validateRegisterData(data:RegisterData) {
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

    async registerNewUser(data:RegisterData) {
        await this.validateRegisterData(data)

        if(data.gender==='female'){
         await this.page.check(RegisterForm.locators.genderFemaleCbx);
        }else{
          await this.page.check(RegisterForm.locators.genderMaleCbx);
        };

        await this.page.fill(RegisterForm.locators.firstNameField,data.firstName);
        await this.page.fill(RegisterForm.locators.lastNameField,data.lastName);
        await this.page.fill(RegisterForm.locators.emailField,data.email);
        await this.page.fill(RegisterForm.locators.passwordField,data.password);
        await this.page.fill(RegisterForm.locators.confirmPasswordField,data.password);
        await this.page.click(RegisterForm.locators.registerBtn);
        await this.page.click(RegisterForm.locators.continueBtn);
    };
};