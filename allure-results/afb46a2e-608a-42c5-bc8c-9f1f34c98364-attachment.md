# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spe.spec.ts >> GET API ----get All Users
- Location: tests\api\users.spe.spec.ts:7:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { ApiHelper } from "../../src/api/ApiHelper";
  2  | import {test,expect} from "../../src/fixtures/apifixtures"
  3  | 
  4  | const TOKEN=process.env.API_Token!;
  5  | const AUTH_HEADER={Authorization:`Bearer ${TOKEN}`};
  6  | 
  7  | test('GET API ----get All Users',async({apiHelper})=>{
  8  |   let response= await apiHelper.get('/public/v2/users',AUTH_HEADER);
> 9  |    expect( response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |   // expect(response.body.length).toBeGreaterThan(0);
  11 | });
  12 | 
  13 | 
  14 |  
```