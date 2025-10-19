import { Page, expect} from '@playwright/test'

export interface RegisterData {
    gender?: 'male' | 'female';
    firstName: string;
    lastName: string;
    email: string;
    password: string
}

export class RegisterForm{
    constructor(private page: Page){}

    private locators = {
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

    private validateRegisterData(data:RegisterData){
        if(!data.firstName||!data.lastName){
            throw new Error("First name or Last name are missing")
        };
        if(!data.email.includes('@')||!data.email.includes('.com')){
            throw new Error("Invalid email address")
        };
        if(data.password.length<6){
            throw new Error("Password must be at least 6 characters")
        }
    }

    async registerNewUser(data:RegisterData){
        await this.validateRegisterData(data)

        if(data.gender==='female'){
         await this.page.check(this.locators.genderFemaleCbx);
        }else{
          await this.page.check(this.locators.genderMaleCbx);
        };

        await this.page.fill(this.locators.firstNameField,data.firstName);
        await this.page.fill(this.locators.lastNameField,data.lastName);
        await this.page.fill(this.locators.emailField,data.email);
        await this.page.fill(this.locators.passwordField,data.password);
        await this.page.fill(this.locators.confirmPasswordField,data.password);
        await this.page.click(this.locators.registerBtn);
        await this.page.click(this.locators.continueBtn);
    };


}