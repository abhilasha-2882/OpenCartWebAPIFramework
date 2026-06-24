# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.ts >> invalid login test with -Abhilasha-Varshney
- Location: tests\RegisterPage.spec.ts:15:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'First Name' })

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | //import {BasePage} from "./BasePage"
  5  | export class RegisterPage extends BasePage{
  6  | //Private Locators :
  7  | private readonly firstname :Locator;
  8  | private readonly lastname :Locator;
  9  | private readonly emailid :Locator;
  10 | private readonly telephone :Locator;
  11 | private readonly password:Locator;
  12 | private readonly confirmpassword :Locator;
  13 | private readonly Noradiobtn :Locator;
  14 | private readonly yesradiobtn :Locator;
  15 | private readonly checkbox :Locator;
  16 | private readonly continuebutton :Locator;
  17 | private readonly registerpageheading:Locator;
  18 | 
  19 | constructor(page:Page){
  20 |     super(page);
  21 |  this.firstname=page.getByRole('textbox',{name:'First Name'});
  22 |  this.lastname=page.getByRole('textbox',{name:'Last NAme'});
  23 |  this.emailid=page.locator('#input-email');
  24 |  this.telephone=page.getByRole('textbox',{name:'Telephone'});
  25 |  this.password=page.getByRole('textbox',{name:'* Password',exact:true});
  26 |  this.confirmpassword=page.getByRole('textbox',{name:'* Password Confirm',exact:true});
  27 |  this.Noradiobtn=page.getByRole('radio', { name: 'No', checked: true })
  28 |  this.yesradiobtn=page.getByRole('radio', { name: 'Yes', checked: false });
  29 |  this.checkbox=page.getByRole('checkbox');
  30 |   this.continuebutton=page.getByRole('button',{name:'Continue'});
  31 |   this.registerpageheading=page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 })
  32 | 
  33 | 
  34 | 
  35 | 
  36 | };
  37 | 
  38 | async goToRegisterPage():Promise<void>{
  39 |     await this.page.goto('opencart/index.php?route=account/register');
  40 | 
  41 | }
  42 | 
  43 | async doRegister(firstname:string,lastname:string,emailid:string,telephone:string,password:string,confirmpassword:string):Promise<void>{
  44 | 
  45 |     console.log(`user registration details are  ${firstname}: ${lastname}:${emailid}:${telephone}:${password}:${confirmpassword}`);
  46 | 
> 47 |     await this.firstname.fill(firstname);
     |                          ^ Error: locator.fill: Target page, context or browser has been closed
  48 |     await this.lastname.fill(lastname);
  49 |     await this.emailid.fill(emailid);
  50 |     await this.telephone.fill(telephone);
  51 |     await this.password.fill(password);
  52 |     await this.confirmpassword.fill(confirmpassword);
  53 |     await this.Noradiobtn.click();
  54 |     await this.checkbox.click();
  55 |     await this.continuebutton.click();
  56 | 
  57 | 
  58 | } 
  59 | 
  60 | async getRegisterPagheading():Promise<string>{
  61 |    
  62 |  return await this.registerpageheading.innerText();
  63 | }
  64 | }
  65 | 
  66 | 
  67 | 
  68 | 
```