import {adminpage} from '../test/adminpage'
import{expect} from'chai';

describe('open the url',()=>
{

  var index=1;
  let admin:adminpage;
  before(function(){
  
    admin=new adminpage();
  })
 
    it('url',()=>
    {
      
      expect(index).to.equal(1)
      admin.open();
      admin.login();
      browser.pause(5000)
      index++;
      expect(browser.getTitle()).to.contain('TDXchange');
    })

    it('creation of hierarchy',()=>
    {
      
     expect(index).to.equal(2);
     admin.createhierachy();
     console.log(browser.getTitle());
    // expect(admin.message.getText()).to.contain('created')
     index++;
     browser.pause(5000)
    })
})