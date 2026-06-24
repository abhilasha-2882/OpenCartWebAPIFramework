# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.ts >> invalid login test with -Abhilasha-Varshney
- Location: tests\RegisterPage.spec.ts:9:5

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
  15 | 
  16 | private readonly checkbox :Locator;
  17 | private readonly continuebutton :Locator;
  18 | 
  19 | 
  20 | constructor(page:Page){
  21 |     super(page);
  22 |  this.firstname=page.getByRole('textbox',{name:'First Name'});
  23 |  this.lastname=page.getByRole('textbox',{name:'Last NAme'});
  24 |  this.emailid=page.getByRole('textbox',{name:'E-Mail'});
  25 |  this.telephone=page.getByRole('link',{name:'Telephone'});
  26 |  this.password=page.getByRole('link',{name:'* Password',exact:true});
  27 |  this.confirmpassword=page.getByRole('link',{name:'* Password Confirm',exact:true});
  28 |  this.Noradiobtn=page.getByRole('button',{name:'No'});
  29 |  this.yesradiobtn=page.getByRole('button',{name:'Yes'});
  30 |  this.checkbox=page.getByRole('checkbox');
  31 |   this.continuebutton=page.getByRole('button',{name:'Continue'});
  32 | 
  33 | 
  34 | };
  35 | 
  36 | async goToRegisterPage():Promise<void>{
  37 |     await this.page.goto('opencart/index.php?route=account/register');
  38 | 
  39 | }
  40 | 
  41 | async doRegister(firstname:string, lastname:string,emailid:string,telephone:string,password:string, confirmpassword:string):Promise<void>{
  42 | 
  43 |     console.log(`user registration details are  ${firstname}: ${lastname}:${emailid}:${telephone}:${password}:${confirmpassword}`);
  44 | 
> 45 |     await this.firstname.fill(firstname);
     |                          ^ Error: locator.fill: Target page, context or browser has been closed
  46 |     await this.lastname.fill(lastname);
  47 |     await this.emailid.fill(emailid);
  48 |     await this.telephone.fill(telephone);
  49 |     await this.password.fill(password);
  50 |     await this.confirmpassword.fill(confirmpassword);
  51 |     await this.Noradiobtn.click();
  52 |     await this.checkbox.click();
  53 |     await this.continuebutton.click();
  54 | 
  55 | 
  56 | } 
  57 | 
  58 | }
  59 | 
  60 | 
  61 | 
  62 | 
```