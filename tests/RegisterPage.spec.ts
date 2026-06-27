import{test,expect} from '../src/fixtures/pagefixture'
import { RegisterPage } from '../src/pages/RegisterPage';
import { csvHelper } from '../src/utils/CsvHelper';

 test.beforeEach(async({registerpage})=>{
   
     await registerpage.goToRegisterPage(); 
   
    })

let testData=csvHelper.readCsv('src/data/Registerdata.csv');

for(let row of testData)
{
    test(`Register with  -${row.firstname}-${row.lastname}`,async({registerpage})=>{
    await registerpage.doRegister(row.firstname!,row.lastname!,row.emailid!,row.telephone!,row.password!,row.confirmpassword!);
    expect(await registerpage.getRegisterPagheading()).toBe('Your Account Has Been Created!'); 
});

};
