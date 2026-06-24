# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\amadeus.oath2.spec.ts >> GET---get Location data
- Location: tests\api\amadeus.oath2.spec.ts:33:1

# Error details

```
ReferenceError: location is not defined
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | let OAUTH_CONFIG={
  4  | 
  5  |    tokenURL:'https://test.api.amadeus.com/v1/security/oauth2/token',
  6  |    clientId:process.env.OAUTH_CLIENT_ID!,
  7  |     clientSecret:process.env.OAUTH_CLIENT_SECRET!,
  8  |     grantType:process.env.GRANT_TYPE!,
  9  | }
  10 | let accessToken:string;
  11 |      test.beforeEach('POST-----generate the access token',async({request})=>{
  12 |        
  13 |         let response=await request.post(OAUTH_CONFIG.tokenURL,{
  14 |            form :
  15 |            {
  16 |             grant_type: OAUTH_CONFIG.grantType,
  17 |             client_id: OAUTH_CONFIG.clientId,
  18 |             client_secret: OAUTH_CONFIG.clientSecret, 
  19 | 
  20 |            }
  21 | 
  22 | 
  23 |         });
  24 | 
  25 |         expect(response.status()).toBe(200);
  26 |         let jsonResponse=await response.json();
  27 |           console.log(jsonResponse);
  28 | 
  29 |        accessToken=jsonResponse.access_token;
  30 |        //console.log(accessToken);
  31 |      })
  32 | 
  33 | test('GET---get Location data',async({request})=>{
  34 |   let baseURL='https://test.api.amadeus.com';
  35 |   let endpointURL='/v1/reference-data/locations';
  36 |   let queryParam= {
  37 |     subType:'CITY,AIRPORT',
  38 |     keyword:'MUC',
  39 |     countryCode:'DE'
  40 |   };
  41 |  let locationResponse= await request.get(`${baseURL}${endpointURL}`,{
  42 |     headers:{
  43 | 
  44 |         Authorization:`Bearer  ${accessToken}`
  45 |     },
  46 |     params:queryParam
  47 |   }); 
  48 |   
  49 |   expect(locationResponse.status()).toBe(200);
  50 |   console.log(await locationResponse.json());
  51 |   let locationJson=await locationResponse.json()
  52 |   console.log(locationJson.meta.count);
  53 |   let location1=locationJson.data[0];
> 54 |   console.log(location)
     |               ^ ReferenceError: location is not defined
  55 | })
  56 | 
  57 | 
  58 | 
```