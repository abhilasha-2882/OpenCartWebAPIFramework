//web app--->intercept the network calls and log them 
//**==wildcard--matched all the URLs...
import{test,expect} from '@playwright/test'

//intercept the network calls ..
test('intercept and log requests',async({page})=>{
  await page.route('**/*',async(route)=>{

  console.log(route.request().method(),route.request().url());
  await route.continue();//url1--capture and continue../..url2---capture----continue..
  });
  
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');


})

//intercept with mocking.:
//mocking:fake data/response
test('mock search data aapi',async({page})=>{

     let fakeProducts=[
        { name:'Fake Macbook Pro',price:"$599"},
        { name:'Fake iphone 20',price:"$999"}

     ] ;
     await page.route('**/index.php?route=product/search&search=macbook',(route)=>{

        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(fakeProducts),
        });

     });
         await page.goto('https://naveenautomationlabs.com/index.php?route=product/search&search=macbook');

      await page.pause();
});
