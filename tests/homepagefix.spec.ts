import{test, expect} from '../src/fixtures/pagefixture'

test.beforeEach(async({loginpage})=>{  
  await loginpage.goToLoginPage();
  await loginpage.doLogin(process.env.USERNAME_1!,process.env.PASSWORD_1!);
 
});

test('home page title test',async({homepage})=>{

const pagetitle=await homepage.getPageTitle();
console.log('home page tiltle is',pagetitle);
expect(pagetitle).toBe('My Account');
});

test('logout link exists test',async({homepage})=>{
expect(await homepage.isLogoutLinkExist()).toBeTruthy();
});

test('home page headers exists test',async({homepage})=>{
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