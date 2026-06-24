import {expect, test} from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage"
import{HomePage} from "../src/pages/HomePage"
let loginpage:LoginPage;
let homepage:HomePage;
test.beforeEach(async({page})=>{
 
  loginpage=new LoginPage(page);
  await loginpage.goToLoginPage();
  await loginpage.doLogin('pwtestbatch@open.com','pw123');
  homepage=new HomePage(page);
});

test('home page title test',async()=>{

const pagetitle=await homepage.getPageTitle();
console.log('home page tiltle is',pagetitle);
expect(pagetitle).toBe('My Account');
});

test('logout link exists test',async()=>{

expect(await homepage.isLogoutLinkExist()).toBeTruthy();
});

test('home page headers exists test',async()=>{
   let allHeaders:string[]=await homepage.getHomePageHeaders();
   console.log(allHeaders);
   expect.soft(allHeaders).toHaveLength(4);
   expect.soft(allHeaders).toEqual([
    'My Account', 
    'My Orders', 
    'My Affiliate Account',
    'Newsletter'

   ]);

})