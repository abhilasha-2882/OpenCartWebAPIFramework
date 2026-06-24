import{test, expect} from '../src/fixtures/pagefixture'
import { csvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async({loginpage})=>{
 
  await loginpage.goToLoginPage();
  await loginpage.doLogin(process.env.USERNAME_1!, process.env.PASSWORD_1!);

});

const productData =csvHelper.readCsv('src/data/product.csv')
for(const row of productData){
test(`verify search results count-${row.searchkey}-${row.productname}`,async({homepage,searchResultspage})=>{
  await homepage.doSearch(row.searchkey!);
  expect(await searchResultspage.getProductSearchResultsCount()).toBe(Number(row.resultcount!));

});
};

for(let row of productData){
test(`verify user is able to land on the prodcut page-${row.searchkey}-${row.productname}`,async({homepage,searchResultspage,page})=>{
  await homepage.doSearch(row.searchkey!);
  await searchResultspage.selectProduct(row.productname!);
  expect(await page.title()).toBe(row.productname!);

});
}


