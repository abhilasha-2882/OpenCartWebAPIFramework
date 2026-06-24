
import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { csvHelper } from "../utils/CsvHelper";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductInfoPage } from "../pages/ProductInfoPage";
//define type for page fixtures:
type pageFixtures={
  loginpage:LoginPage,
  homepage:HomePage,
  registerpage:RegisterPage,
  searchResultspage:SearchResultsPage,
   productInfoPage :ProductInfoPage,
  testData : Record<string, string>[];

};
//extend plawright base test :

export let test =baseTest.extend<pageFixtures>({
 loginpage: async({page},use)=>{
    let loginpage =new LoginPage(page);
    await use(loginpage);
 },

  homepage: async({page},use)=>{
    let homepage =new HomePage(page);
    await use(homepage);
 },
  registerpage: async({page},use)=>{
    let resgisterpage =new RegisterPage(page);
    await use(resgisterpage);
 },

  searchResultspage: async({page},use)=>{
    let searchResultspage =new SearchResultsPage(page);
    await use(searchResultspage);
 },
 
  productInfoPage: async({page},use)=>{
    let productInfoPage =new ProductInfoPage(page);
    await use(productInfoPage);
 },
testData :async({},use)=>{

  let testData=csvHelper.readCsv('src/data/loginData.csv');
  await use(testData);
},

});

export {expect} from '@playwright/test';