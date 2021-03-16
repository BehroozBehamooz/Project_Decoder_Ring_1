const polybius = require("../src/polybius");
const expect=require("chai").expect;
// Write your tests here!

describe("polybius",()=>{
    it("polybius should encode",()=>{
        const expecteds=["4432423352125413","3251131343 2543241341"];
        const actuals=[polybius("thinkful"),polybius("Hello world")];
        for (let i=0 ; i<expecteds.length ; i++)
          expect(actuals[i]).to.equal(expecteds[i]);
    });
    it("polybius should decode correctly with all numbers or with space",()=>{
        const expecteds=["th(i/j)nkful","hello world"];
        const actuals=[polybius("4432423352125413", false),polybius("3251131343 2543241341", false)];
        for (let i=0 ; i<expecteds.length ; i++)
          expect(actuals[i]).to.equal(expecteds[i]);
    });
});
