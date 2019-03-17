import { participant } from "../test/partcipant";
import { adminpage } from "../test/adminpage";

describe("participant",()=>
{
 let part:participant;
 let admin:adminpage
 before(function()
 {
     part=new participant();
     admin=new adminpage();
 })
 it('creation',()=>

 {   
    admin.open(); 
    admin.login()
    browser.pause(5000);
    part.createparticipants();
    
 })
})