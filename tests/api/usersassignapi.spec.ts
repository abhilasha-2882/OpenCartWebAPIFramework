import { ApiHelper } from "../../src/api/ApiHelper";
import {test,expect} from "../../src/fixtures/apifixtures"
const TOKEN=process.env.API_Token!;
let  AUTH_HEADER={Authorization: `Bearer ${TOKEN}` };

async function createUser(apiHelper:any){
  let userData={
    firstname:'Tim',
    lastname:'John',
    totalprice:111,
    depositpaid:true,
    bookingdates:{
        checkin  :'2018-01-01',
        checkout :'2019-01-01'
    },
    additionalneeds:'Breakfast'

  };
  let response=await apiHelper.post('/booking',userData,AUTH_HEADER);
  expect(response.status).toBe(200);
  return response.body;
}
test('POST-create a user',async({apiHelper})=>{
 //create a user
    let userResponse=await createUser(apiHelper);
    console.log(userResponse.bookingid);

    let response= await apiHelper.get(`/booking/${userResponse.bookingid}`,AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.body.firstname).toBe("Tim");

})


//Test2:update a user +verify:AAA
//POST--->userid---PUT-->Get/userId-->verify
test('PUT-update a user',async({apiHelper})=>{
    let userupdatedData = {
    firstname: 'Tim updated',
    lastname: 'Varshney',
    totalprice: 500,
    depositpaid: true,
    bookingdates: {
      checkin: '2018-01-01',
      checkout: '2019-01-01'
    },
    additionalneeds: 'Breakfast'
  };
    let userResponse=await createUser(apiHelper);
    let response= await apiHelper.put(`/booking/${userResponse.bookingid}`,userupdatedData,AUTH_HEADER);
    console.log(response.body.totalprice);
    expect(response.status).toBe(200);
    expect(response.body.firstname).toBe(userupdatedData.firstname);
    expect(response.body.additionalneeds).toBe("Breakfast");
   let getResponse= await apiHelper.get(`/booking/${userResponse.bookingid}`,AUTH_HEADER);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.firstname).toBe(userupdatedData.firstname);
     expect(getResponse.body.totalprice).toBe(userupdatedData.totalprice);

})

