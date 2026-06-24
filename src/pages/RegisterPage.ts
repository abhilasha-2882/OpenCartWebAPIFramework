import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

//import {BasePage} from "./BasePage"
export class RegisterPage extends BasePage{
//Private Locators :
private readonly firstname :Locator;
private readonly lastname :Locator;
private readonly emailid :Locator;
private readonly telephone :Locator;
private readonly password:Locator;
private readonly confirmpassword :Locator;
private readonly Noradiobtn :Locator;
private readonly yesradiobtn :Locator;
private readonly checkbox :Locator;
private readonly continuebutton :Locator;
private readonly registerpageheading:Locator;

constructor(page:Page){
    super(page);
 this.firstname=page.getByRole('textbox',{name:'First Name'});
 this.lastname=page.getByRole('textbox',{name:'Last NAme'});
 this.emailid=page.locator('#input-email');
 this.telephone=page.getByRole('textbox',{name:'Telephone'});
 this.password=page.getByRole('textbox',{name:'* Password',exact:true});
 this.confirmpassword=page.getByRole('textbox',{name:'* Password Confirm',exact:true});
 this.Noradiobtn=page.getByRole('radio', { name: 'No', checked: true })
 this.yesradiobtn=page.getByRole('radio', { name: 'Yes', checked: false });
 this.checkbox=page.getByRole('checkbox');
  this.continuebutton=page.getByRole('button',{name:'Continue'});
  this.registerpageheading=page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 })




};

async goToRegisterPage():Promise<void>{
    await this.page.goto('opencart/index.php?route=account/register');

}

async doRegister(firstname:string,lastname:string,emailid:string,telephone:string,password:string,confirmpassword:string):Promise<void>{

    console.log(`user registration details are  ${firstname}: ${lastname}:${emailid}:${telephone}:${password}:${confirmpassword}`);

    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.emailid.fill(emailid);
    await this.telephone.fill(telephone);
    await this.password.fill(password);
    await this.confirmpassword.fill(confirmpassword);
    await this.Noradiobtn.click();
    await this.checkbox.click();
    await this.continuebutton.click();


} 

async getRegisterPagheading():Promise<string>{
   console.log(await this.registerpageheading.innerText())
 return await this.registerpageheading.innerText();
}
}



