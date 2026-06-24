# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefix.spec.ts >> forgotpassword link exists test
- Location: tests\loginpagefix.spec.ts:17:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/opencart/index.php?route=account/login", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | //import {BasePage} from "./BasePage"
  5  | export class LoginPage extends BasePage{
  6  | //Private Locators :
  7  | private readonly emailId :Locator;
  8  | private readonly password :Locator;
  9  | private readonly loginBtn :Locator;
  10 | private readonly forgottenPasswordLink :Locator;
  11 | private readonly logo:Locator;
  12 | constructor(page:Page){
  13 |     super(page);
  14 |  this.emailId=page.getByRole('textbox',{name:'E-Mail Address'});
  15 |  this.password=page.getByRole('textbox',{name:'Password'});
  16 |  this.loginBtn=page.getByRole('button',{name:'Login'});
  17 |  this.forgottenPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first();
  18 |  this.logo=page.getByAltText('naveenopencart');
  19 | }
  20 | 
  21 | //public page action(methods)/behaviour
  22 | async goToLoginPage():Promise<void>{
> 23 |     await this.page.goto('/opencart/index.php?route=account/login');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  24 | 
  25 | }
  26 | 
  27 | async getLoginPageTitle():Promise<string>{
  28 |     return await this.page.title();
  29 | 
  30 | }
  31 | async isForgetPwdLinkExist():Promise<boolean>{
  32 |  return await this.forgottenPasswordLink.isVisible();
  33 | 
  34 | }
  35 | async doLogin(username:string, password:string):Promise<void>{
  36 | 
  37 |     console.log(`user credentials ${username}: ${password}`);
  38 | 
  39 |     await this.emailId.fill(username);
  40 |     await this.password.fill(password);
  41 |     await this.loginBtn.click();
  42 | 
  43 | }      
  44 | 
  45 | }
```