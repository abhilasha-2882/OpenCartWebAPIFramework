import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
 


export class ProductInfoPage extends BasePage{
  
    private readonly header:Locator;
    private readonly productImages:Locator;
    private readonly productMetaData:Locator;
    private readonly productPricing:Locator;
    private readonly productQuantity:Locator;
    private readonly addtocarbtn :Locator;
    private readonly successhdr:Locator;
    private readonly shoppingcart :Locator;
    private map:Map<string,string|number>;

    constructor(page:Page)
    {
        super(page);
        this.header=page.getByRole('heading', {level:1 });
        this.productImages=page.locator('div#content li img');
        this.productMetaData=page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
        this.productPricing= page.locator('div#content ul.list-unstyled:nth-of-type(2) li');   
        this.map=new Map<string, string>(); 
        this.productQuantity=page.locator('//input[@id="input-quantity"]');
        this.addtocarbtn=page.locator('//button[@id="button-cart"]');
        this.successhdr=page.locator('.alert.alert-success.alert-dismissible');
        this.shoppingcart=page.locator('div.alert.alert-success.alert-dismissible a:nth-of-type(2)');

    }

    async getProductHeader():Promise<string>
    {
        return await this.header.innerText();
    }

    async getProductImagesCount():Promise<number>
    {
      // await this.page.waitForTimeout(4000); 
      await this.productImages.first().waitFor({state:'visible'});
      return await this.productImages.count();

    }
    async getProductInfo():Promise<Map<string,string|number>>
    {
        this.map.set('productHeader', await this.getProductHeader())  ;
        this.map.set('productImages', await this.getProductImagesCount());
        await  this.getProductMetaData()
        await this.getProducPricingData();
        return this.map;
    }
   private async getProductMetaData():Promise<void>{
    let metaData=  await this.productMetaData.allInnerTexts();
    for(let data of metaData)
    {  
        let meta=data.split(':');
        let metaKey=meta[0]?.trim();
        let metaValue=meta[1]?.trim();
        this.map.set(metaKey!,metaValue!);        
    }
   }
     private async getProducPricingData():Promise<void>{
    let priceData=  await this.productPricing.allInnerTexts();
    let productPrice=priceData[0]?.trim();
    let exTaxPrice=priceData[1]?.split(':')[1]?.trim();
    this.map.set('productPrice',productPrice!);
    this.map.set('exTaxPrice',exTaxPrice!);
        
   }
   async productaddTocart() :Promise<string>
   {
    await this.productQuantity.fill('1');
    await this.addtocarbtn.click();
    return await this.successhdr.innerText();
   } 
   async clickShoppingCart() :Promise<void>

   {
    await this.shoppingcart.click();
    await this.page.pause();
   }
  //div.alert.alert-success.alert-dismissible a:nth-of-type(2)

   }