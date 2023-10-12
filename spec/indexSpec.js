import { Main } from '../index.js';

describe("les groupe de seconde", function () {
   
   let main = new Main();
   it("simple seconde function return j ", function(){
      
      let result = main.simpleMinute('j');

      expect(result).toBe(1);
   });

})