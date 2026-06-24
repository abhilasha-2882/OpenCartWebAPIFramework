import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
 export class CartPage extends BasePage {
    private readonly productImg:Locator;
    private readonly productName:Locator;
    private readonly Model:Locator;
    private readonly quantity:Locator;
    private readonly UnitPrice:Locator;
    private readonly Total :Locator;
    
     constructor(page:Page)
    {
        super(page);
        this.productImg=page.locator('div.table-responsive tbody tr td:nth-of-type(1)');
        this.productName=page.locator('div.table-responsive tbody tr td:nth-of-type(2)');
        this.Model=page.locator('div.table-responsive tbody tr td:nth-of-type(3)');
        this.quantity= page.locator('input[name="quantity[125197]"]');   
        this.UnitPrice=page.locator('div.table-responsive tbody tr td:nth-of-type(5)');
        this.Total=page.locator('div.table-responsive tbody tr td:nth-of-type(6)');   

    }
 
 async getProductDataOncart()
 {
   const imgvisible= await this.productImg.isVisible();
   let productname=await this.productName.allTextContents();
   const productnm=productname[0];
   const rewardpoints=productname[1]?.split(':')[1]?.trim();
    

}
 }