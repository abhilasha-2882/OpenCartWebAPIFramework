# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.api.indi.spec.ts >> POST-create a user
- Location: tests\api\users.api.indi.spec.ts:30:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import { ApiHelper } from "../../src/api/ApiHelper";
  2  | import {test,expect} from "../../src/fixtures/apifixtures"
  3  | 
  4  | const TOKEN=process.env.API_Token!;
  5  | let  AUTH_HEADER={Authorization: `Bearer ${TOKEN}` };
  6  | 
  7  | //Post---get
  8  | //post--put
  9  | //post--get
  10 | //post--delete
  11 | //create a user 
  12 | //helper-generic--function -create a fresh user
  13 | async function createUser(apiHelper:any){
  14 |   let userData={
  15 |     name:'Abhilasha API',
  16 |     email:`automation_${Date.now()}@open.com`,
  17 |     gender:'female',
  18 |     status:'active'
  19 | 
  20 |   };
  21 |   let response=await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
> 22 |   expect(response.status).toBe(201);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |   return response.body;
  24 | 
  25 | 
  26 | }
  27 | 
  28 | //Test1:create a user +verify:AAA
  29 | //POST--->userid--->Get/userId-->verify
  30 | test('POST-create a user',async({apiHelper})=>{
  31 |  //create a user
  32 |     let userResponse=await createUser(apiHelper);
  33 |     let response= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  34 |     console.log(response.body.id);
  35 |     expect(response.status).toBe(200);
  36 |     expect(response.body.name).toBe("Abhilasha API");
  37 | 
  38 | })
  39 | 
  40 | //Test2:update a user +verify:AAA
  41 | //POST--->userid---PUT-->Get/userId-->verify
  42 | test('PUT-update a user',async({apiHelper})=>{
  43 |         let userupdatedData={
  44 |     name:'Abhilasha API updated',
  45 |     status:'inactive'
  46 | 
  47 |   };
  48 |     let userResponse=await createUser(apiHelper);
  49 |     let response= await apiHelper.put(`/public/v2/users/${userResponse.id}`,userupdatedData,AUTH_HEADER);
  50 |     console.log(response.body.id);
  51 |     expect(response.status).toBe(200);
  52 |     expect(response.body.name).toBe(userupdatedData.name);
  53 |     expect(response.body.status).toBe(userupdatedData.status);
  54 |    let getResponse= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  55 |     console.log(response.body.id);
  56 |     expect(getResponse.status).toBe(200);
  57 |     expect(getResponse.body.name).toBe(userupdatedData.name);
  58 |      expect(getResponse.body.status).toBe(userupdatedData.status);
  59 | 
  60 | })
  61 | //Test 3:Delete a User and verify :AAA
  62 | //POST--->userId-->DELETE(204)-->GET/userId--verify(404)
  63 | test('DELETE-delete a user',async({apiHelper})=>{
  64 |   
  65 |     let userResponse=await createUser(apiHelper);
  66 | 
  67 |    let response= await apiHelper.delete(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  68 |     expect(response.status).toBe(204);
  69 |    let getResponse= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  70 |     expect(getResponse.status).toBe(404);
  71 |     expect(getResponse.body.message).toBe('Resource not found');
  72 | 
  73 | })
  74 | 
```