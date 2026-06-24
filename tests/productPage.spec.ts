import{test, expect} from '../src/fixtures/pagefixture'
import { SearchResultsPage } from '../src/pages/SearchResultsPage';
import { csvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async({loginpage})=>{
 
  await loginpage.goToLoginPage();
  await loginpage.doLogin(process.env.USERNAME_1!, process.env.PASSWORD_1!);

});


test('verify product images count',async({homepage,searchResultspage,productInfoPage})=>{
  await homepage.doSearch('macbook');
  await searchResultspage.selectProduct('MacBook Pro');
  let imgCount=await productInfoPage.getProductImagesCount();
  console.log('total images',imgCount);
  expect(imgCount).toBe(4);
});


 let productinfoData=csvHelper.readCsv('src/data/ProductInfo.csv');
 for(let row of productinfoData){
test(`verify product Information/Data with -${row.searchkey}-${row.productname}`,async({homepage,searchResultspage,productInfoPage})=>{
  await homepage.doSearch(row.searchkey!);
  await searchResultspage.selectProduct(row.productname!);
  let actualproductInfoMap= await productInfoPage.getProductInfo();
  console.log('Actual Product Details:',actualproductInfoMap);
  expect.soft(actualproductInfoMap.get('productHeader')).toBe(row.productHeader);
  expect.soft(actualproductInfoMap.get('Brand')).toBe(row.Brand);
  expect.soft(actualproductInfoMap.get('Product Code')).toBe(row.productCode);
  expect.soft(actualproductInfoMap.get('Reward Points')).toBe(row.rewardPoints);
  expect.soft(actualproductInfoMap.get('productPrice')).toBe(row.productPrice);
  expect.soft(actualproductInfoMap.get('exTaxPrice')).toBe(row.exTaxPrice);
  
  
});
 }
test('verify add to cart',async({homepage,searchResultspage,productInfoPage})=>{
  await homepage.doSearch('macbook');
  await searchResultspage.selectProduct('MacBook Pro');
  let successheader=await productInfoPage.productaddTocart();
  console.log(successheader)
  expect(successheader.replace('×', '').trim()).toBe('Success: You have added MacBook Pro to your shopping cart!');
  await productInfoPage.clickShoppingCart();
});
 