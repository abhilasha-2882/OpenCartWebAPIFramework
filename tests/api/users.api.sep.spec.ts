import { ApiHelper } from "../../src/api/ApiHelper";
import {test,expect} from "../../src/fixtures/apifixtures"

const TOKEN=process.env.API_TOKEN!;
const AUTH_HEADER={Authorization:`Bearer ${TOKEN}`};
let userId:number;
test.describe.serial('running e2e go rest crud api tests',()=>{


test('GET API ----get All Users',async({apiHelper})=>{
  let response= await apiHelper.get('/public/v2/users',AUTH_HEADER);
   expect( response.status).toBe(200);
  // expect(response.body.length).toBeGreaterThan(0);
});

test('POST API ----create a  user',async({apiHelper})=>{
    
     let userData={
    name:'Abhilasha API Auto',
    email:`automation_${Date.now()}@open.com`,
    gender:'male',
    status:'active'
  };
  let response= await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
   expect( response.status).toBe(201);
   expect(response.body.name).toBe(userData.name);
   expect(response.body.email).toBe(userData.email);
       userId=response.body.id;
      console.log(userId);
});
 
test('PUT API ----Update a  user',async({apiHelper})=>{
    
     let userupdatedData={
    name:'Abhilasha API updated',
    email:`automation_${Date.now()}@open.com`,
    gender:'Female',
    status:'inactive'
  };
  let response= await apiHelper.put(`/public/v2/users/${userId}`,userupdatedData,AUTH_HEADER);
   expect( response.status).toBe(200);
   expect(response.body.name).toBe(userupdatedData.name);
   expect(response.body.email).toBe(userupdatedData.email);
   expect(response.body.status).toBe(userupdatedData.status);

});

test('DELETE API ----delete a  user',async({apiHelper})=>{
    
  
  let response= await apiHelper.delete(`/public/v2/users/${userId}`,AUTH_HEADER);
   expect( response.status).toBe(204);
  

});
})