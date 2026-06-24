# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spe.spec.ts >> GET API ----get All Users
- Location: tests\api\users.spe.spec.ts:7:1

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { APIRequestContext } from "@playwright/test";
  2  | export class ApiHelper
  3  | {
  4  |   
  5  |     private readonly request:APIRequestContext;
  6  |     private readonly baseURL:string;
  7  | 
  8  |     constructor(request:APIRequestContext,baseURL:string)
  9  |     {
  10 |         this.request=request;
  11 |         this.baseURL=baseURL;
  12 | 
  13 | 
  14 |     }
  15 | 
  16 |  //GET
  17 | 
  18 |  async get(endPoint:string, headers?:Record<string, string>)
  19 |  {
  20 |    let response= await this.request.get(`${this.baseURL}${endPoint}`,{
  21 | 
  22 |         headers:headers
  23 |     });
  24 | 
  25 |     return {
  26 |          status:response.status(),
> 27 |          body:await response.json()
     |               ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  28 | 
  29 | 
  30 |     }
  31 |  }
  32 |  
  33 |  //POST
  34 |  async post(endPoint:string, data:object,headers?:Record<string, string>)
  35 |  {
  36 |    let response= await this.request.post(`${this.baseURL}${endPoint}`,{
  37 |          data:data,
  38 |         headers:headers
  39 |        
  40 | 
  41 |     });
  42 | 
  43 |     return {
  44 |          status:response.status(),
  45 |          body:await response.json()
  46 | 
  47 | 
  48 |     }
  49 |  }
  50 |  
  51 | 
  52 |  //PUT
  53 | async put(endPoint:string, data:object,headers?:Record<string, string>)
  54 |  {
  55 |    let response= await this.request.put(`${this.baseURL}${endPoint}`,{
  56 |          data:data,
  57 |         headers:headers
  58 |        
  59 | 
  60 |     });
  61 | 
  62 |     return {
  63 |          status:response.status(),
  64 |          body:await response.json()
  65 | 
  66 | 
  67 |     }
  68 |  }
  69 |  
  70 | 
  71 | 
  72 |  //Delete
  73 | 
  74 |  async delete(endPoint:string,headers?:Record<string, string>)
  75 |  {
  76 |    let response= await this.request.delete(`${this.baseURL}${endPoint}`,{
  77 |         
  78 |          headers:headers
  79 |        
  80 | 
  81 |     });
  82 | 
  83 |     return {
  84 |          status:response.status(),
  85 | 
  86 |     }
  87 |  }
  88 |  
  89 | 
  90 | }
```