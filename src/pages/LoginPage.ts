import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

//import {BasePage} from "./BasePage"
export class LoginPage extends BasePage{
//Private Locators :
private readonly emailId :Locator;
private readonly password :Locator;
private readonly loginBtn :Locator;
private readonly forgottenPasswordLink :Locator;
//private readonly logo:Locator;
private readonly loginErrorMessage :Locator;
constructor(page:Page){
    super(page);
 this.emailId=page.getByRole('textbox',{name:'E-Mail Address'});
 this.password=page.getByRole('textbox',{name:'Password'});
 this.loginBtn=page.getByRole('button',{name:'Login'});
 this.forgottenPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first();
// this.logo=page.getByAltText('naveenopencart');
 this.loginErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');

}

//public page action(methods)/behaviour
async goToLoginPage():Promise<void>{
    await this.page.goto('/opencart/index.php?route=account/login',{ waitUntil: 'domcontentloaded' });

}

async getLoginPageTitle():Promise<string>{
    return await this.page.title();

}
async isForgetPwdLinkExist():Promise<boolean>{
 return await this.forgottenPasswordLink.isVisible();

}
async doLogin(username:string, password:string):Promise<void>{

    console.log(`user credentials ${username}: ${password}`);

    await this.emailId.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
   

}      
async isInvalidLoginErrorDisplayed():Promise<boolean>
{
    return await this.loginErrorMessage.isVisible();
}
}