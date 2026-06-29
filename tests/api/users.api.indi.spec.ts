import { ApiHelper } from "../../src/api/ApiHelper";
import {test,expect} from "../../src/fixtures/apifixtures"

const TOKEN=process.env.API_TOKEN!;
let  AUTH_HEADER={Authorization: `Bearer ${TOKEN}` };

//Post---get
//post--put
//post--get
//post--delete
//create a user 
//helper-generic--function -create a fresh user
async function createUser(apiHelper:any){
  let userData={
    name:'Abhilasha API',
    email:`automation_${Date.now()}@open.com`,
    gender:'female',
    status:'active'

  };
  let response=await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
  expect(response.status).toBe(201);
  return response.body;


}

//Test1:create a user +verify:AAA
//POST--->userid--->Get/userId-->verify
test('POST-create a user',async({apiHelper})=>{
 //create a user
    let userResponse=await createUser(apiHelper);
    let response= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
    console.log(response.body.id);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Abhilasha API");

})

//Test2:update a user +verify:AAA
//POST--->userid---PUT-->Get/userId-->verify
test('PUT-update a user',async({apiHelper})=>{
        let userupdatedData={
    name:'Abhilasha API updated',
    status:'inactive'

  };
    let userResponse=await createUser(apiHelper);
    let response= await apiHelper.put(`/public/v2/users/${userResponse.id}`,userupdatedData,AUTH_HEADER);
    console.log(response.body.id);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(userupdatedData.name);
    expect(response.body.status).toBe(userupdatedData.status);
   let getResponse= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
    console.log(response.body.id);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.name).toBe(userupdatedData.name);
     expect(getResponse.body.status).toBe(userupdatedData.status);

})
//Test 3:Delete a User and verify :AAA
//POST--->userId-->DELETE(204)-->GET/userId--verify(404)
test('DELETE-delete a user',async({apiHelper})=>{
  
    let userResponse=await createUser(apiHelper);

   let response= await apiHelper.delete(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
    expect(response.status).toBe(204);
   let getResponse= await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
    expect(getResponse.status).toBe(404);
    expect(getResponse.body.message).toBe('Resource not found');

})
