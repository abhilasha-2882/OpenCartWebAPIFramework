import {expect, test} from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage"
import { beforeEach } from "node:test";
import { HomePage } from "../src/pages/HomePage";

let loginpage :LoginPage;
let homepage:HomePage;
    
    test.beforeEach(async({page})=>{
      loginpage=new LoginPage(page);
     await loginpage.goToLoginPage(); 
     homepage=new HomePage(page);
   
    })

test('login page title test',async()=>{

const pagetitle=await loginpage.getLoginPageTitle();
console.log(pagetitle);
expect(pagetitle).toBe('Account Login');
});

test('forgotpassword link exists test',async()=>{

const isexist=await loginpage.isForgetPwdLinkExist(); 
expect(isexist).toBeTruthy();
});

test('user is able to login to app test',async()=>{

await loginpage.doLogin('pwtestbatch@open.com','pw123');
expect(await homepage.isLogoutLinkExist()).toBeTruthy();
expect (await homepage.getPageTitle()).toBe('My Account');

});