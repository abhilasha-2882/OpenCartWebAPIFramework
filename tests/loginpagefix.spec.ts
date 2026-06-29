import{test,expect} from '../src/fixtures/pagefixture'
import { LoginPage } from '../src/pages/LoginPage';
import { csvHelper } from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


    test.beforeEach(async({loginpage})=>{
   
     await loginpage.goToLoginPage(); 
   
    })

test('login page title test',async({loginpage})=>{

const pagetitle=await loginpage.getLoginPageTitle();
console.log(pagetitle);
expect(pagetitle).toBe('Account Login');
});

test('forgotpassword link exists test',async({loginpage})=>{

const isexist=await loginpage.isForgetPwdLinkExist(); 
expect(isexist).toBeTruthy();
});

test('user is able to login to app test',async({loginpage,homepage})=>{

await loginpage.doLogin(process.env.USERNAME_1!,process.env.PASSWORD_1!);
expect(await homepage.isLogoutLinkExist()).toBeTruthy();
expect (await homepage.getPageTitle()).toBe('My Account');

});

//sequence mode--1 test is running with test data one by one 
test('login to app using the wrong credential with Data driven test',async({loginpage, testData})=>{
   for(let row of testData){
   
    await loginpage.doLogin(row.username!,row.password!);
    expect(await loginpage.isInvalidLoginErrorDisplayed()).toBeTruthy();
     
   }

});
//2-without fixtures , parallel mode,read csv data directly and loop the test method row wise..

let testData=csvHelper.readCsv('src/data/logindata.csv');

for(let row of testData)
{
    test(`invalid login test with -${row.username}-${row.password}`,async({loginpage})=>{
    await loginpage.doLogin(row.username!,row.password!);
    expect(await loginpage.isInvalidLoginErrorDisplayed()).toBeTruthy();

});


};

let logintestData=ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx','login');
//MS excel -office latest
//xlsx format
//maintenance
for(let row of logintestData)
{
    test(`invalid login test with excel data -${row.username}-${row.password}`,async({loginpage})=>{
    await loginpage.doLogin(row.username!,row.password!);
    expect(await loginpage.isInvalidLoginErrorDisplayed()).toBeTruthy();

});
}


let loginJSONData=JsonHelper.readJson('src/data/logindata.json');

for(let row of loginJSONData)
{
    test(`invalid login test with JSON data -${row.username}-${row.password}`,async({loginpage})=>{
    await loginpage.doLogin(row.username!,row.password!);
    expect(await loginpage.isInvalidLoginErrorDisplayed()).toBeTruthy();

});
}

//csv vs excel vs json 

