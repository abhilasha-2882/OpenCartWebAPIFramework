# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefix.spec.ts >> user is able to login to app test
- Location: tests\loginpagefix.spec.ts:23:1

# Error details

```
Error: locator.isVisible: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | //import {BasePage} from "./BasePage"
  5  | export class HomePage extends BasePage{
  6  | //Private Locators :
  7  | private readonly logoutLink :Locator;
  8  | private readonly headers:Locator;
  9  | 
  10 | constructor(page:Page){
  11 |     super(page);
  12 |     this.logoutLink=page.getByRole('link',{name:'Logout'});
  13 |     this.headers=page.getByRole('heading',{level:2});
  14 |  
  15 | }
  16 | 
  17 | //public page action(methods)/behaviour
  18 | 
  19 | 
  20 | async getHomePageTitle():Promise<string>{
  21 |     return await this.page.title();
  22 | 
  23 | }
  24 | async isLogoutLinkExist():Promise<boolean>{
> 25 |  return await this.logoutLink.isVisible();
     |                               ^ Error: locator.isVisible: Target page, context or browser has been closed
  26 | 
  27 | }
  28 | 
  29 | async getHomePageHeaders() :Promise<string[]>{ 
  30 |   return await this.headers.allInnerTexts();
  31 | 
  32 | }
  33 | }
```