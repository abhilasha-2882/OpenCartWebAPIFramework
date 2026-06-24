# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spe.spec.ts >> PUT API ----Update a  user
- Location: tests\api\users.spe.spec.ts:29:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { ApiHelper } from "../../src/api/ApiHelper";
  2  | import {test,expect} from "../../src/fixtures/apifixtures"
  3  | 
  4  | const TOKEN=process.env.API_Token!;
  5  | const AUTH_HEADER={Authorization:`Bearer ${TOKEN}`};
  6  | let userId:number;
  7  | test('GET API ----get All Users',async({apiHelper})=>{
  8  |   let response= await apiHelper.get('/public/v2/users',AUTH_HEADER);
  9  |    expect( response.status).toBe(200);
  10 |   // expect(response.body.length).toBeGreaterThan(0);
  11 | });
  12 | 
  13 | test('POST API ----create a  user',async({apiHelper})=>{
  14 |     
  15 |      let userData={
  16 |     name:'Abhilasha API Auto',
  17 |     email:`automation_${Date.now()}@open.com`,
  18 |     gender:'male',
  19 |     status:'active'
  20 |   };
  21 |   let response= await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
  22 |    expect( response.status).toBe(201);
  23 |    expect(response.body.name).toBe(userData.name);
  24 |    expect(response.body.email).toBe(userData.email);
  25 |        userId=response.body.id;
  26 |       console.log(userId);
  27 | });
  28 |  
  29 | test('PUT API ----Update a  user',async({apiHelper})=>{
  30 |     
  31 |      let userupdatedData={
  32 |     name:'Abhilasha API updated',
  33 |     email:`automation_${Date.now()}@open.com`,
  34 |     gender:'Female',
  35 |     status:'inactive'
  36 |   };
  37 |   let response= await apiHelper.put(`/public/v2/users/${userId}`,userupdatedData,AUTH_HEADER);
> 38 |    expect( response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  39 |    expect(response.body.name).toBe(userupdatedData.name);
  40 |    expect(response.body.email).toBe(userupdatedData.email);
  41 |    expect(response.body.status).toBe(userupdatedData.status);
  42 | 
  43 | });
  44 |  
```