import {expect, test} from "@playwright/test"
let AUTH_TOKEN={Authorization:'Bearer 49540ffacb5fe3b659041294d5a8c0ef45f980d41dcf9ffc998d34afeb9d9c62'}
test('get user test',async({request})=>{

 let response=await request.get('https://gorest.co.in//public/v2/users/',
  {headers:AUTH_TOKEN});
//console.log(response);
let jsonBody=await response.json();
console.log(jsonBody);
console.log(response.status())
console.log(response.statusText())
expect(response.status()).toBe(200);
});

test('create user test',async({request})=>{
  //json object
    let userData={
    name:'uday',
    email:`automation_${Date.now()}@open.com`,
    gender:'male',
    status:'active'
  };
  //json object to JSON:Serialization
 let response=await request.post('https://gorest.co.in//public/v2/users/',
  {headers:AUTH_TOKEN,
    data:userData
});
//console.log(response);
let jsonBody=await response.json();
console.log(jsonBody);
console.log(response.status())//201
console.log(response.statusText())//created1
expect(response.status()).toBe(201);

});

test('update a user test',async({request})=>{
  //json object
    let userData={
    name:'uday101',
    email:`automation_${Date.now()}@open.com`,
    gender:'male',
    status:'inactive'
  };
  //json object to JSON:Serialization
 let response=await request.put('https://gorest.co.in//public/v2/users/8507808',
  {headers:AUTH_TOKEN,
    data:userData
});
//console.log(response);
let jsonBody=await response.json();
console.log(jsonBody);
console.log(response.status())//200
console.log(response.statusText())//ok
});

test('delete a user test',async({request})=>{
  //json object
   
  //json object to JSON:Serialization
 let response=await request.delete('https://gorest.co.in//public/v2/users/8507808',
  {headers:AUTH_TOKEN,
});

console.log(response.status())//204
console.log(response.statusText())//No Content
});