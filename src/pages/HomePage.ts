import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { promises } from "dns";

//import {BasePage} from "./BasePage"
export class HomePage extends BasePage{
//Private Locators :
private readonly logoutLink :Locator;
private readonly headers:Locator;
private readonly username1 :Locator;



constructor(page:Page){
    super(page);
    this.logoutLink=page.getByRole('link',{name:'Logout'});
    this.headers=page.getByRole('heading',{level:2});
    this.username1=page.getByRole('textbox',{name:'username'});
 
}

//public page action(methods)/behaviour


async isLogoutLinkExist():Promise<boolean>{
 return await this.logoutLink.isVisible();

}

async getHomePageHeaders() :Promise<string[]>{ 
  return await this.headers.allInnerTexts();

}

async doSearch(searchkey:string):Promise<void>{

     console.log(`search key:${searchkey}`);
     await this.searchBox.fill(searchkey);
     await this.searchIcon.click();
     
}
}