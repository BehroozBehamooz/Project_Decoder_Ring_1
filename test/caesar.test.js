// Write your tests here!
const expect=require ("chai").expect;
const caesar = require("../src/caesar");

describe("caesar",()=>{
    it("should return false if shift is not present, equal to 0, less than -25 or greater than 25",()=>{
        const expected=false;
        const actual=caesar("any") && caesar("any",0) && caesar("any",26) && caesar("any",-26);
        expect(actual).to.equal(expected);
    });
    it(`should return "def" if caesar("abc",3) is called`,()=>{
        const expected="def";
        actual=caesar("abc",3);
        expect(actual).to.equal(expected);
    });
    it ("should ignore space",()=>{
        const expected="d f";
        const actual=caesar("a c",3);
        expect(actual).to.equal(expected);
    });
    it ("should ignore non-alphabetic characters",()=>{
        const expecteds=["d f","d@f","d2f"];
        const actuals=[caesar("a c",3),caesar("a@c",3),caesar("a2c",3)];
        for (let i=0 ; i<3 ; i++){
            expect(actuals[i]).to.equal(expecteds[i]);
           
        }
    });
    it(`should return "uvw" if caesar("xyz",-3) is called`,()=>{
        const expected="uvw";
        actual=caesar("xyz",-3);
        expect(actual).to.equal(expected);
    });
    it(`capital letters can be ignored`,()=>{
        const expected="def";
        actual=caesar("aBc",3);
        expect(actual).to.equal(expected);
    });
    it(`it should wrap around to the front of the alphabet. If a letter is shifted so that it goes "off" the alphabet`,()=>{
        const expecteds=["abc","bpqa qa i amkzmb umaaiom!"];
        actuals=[caesar("xyz",3),caesar("This is a secret message!", 8)];
        for (let i=0 ; i<expecteds.length ; i++)
          expect(actuals[i]).to.equal(expecteds[i]);
    });
    it(`it should decode`,()=>{
        const expecteds=["this is a secret message!","this is a secret message!"];
        actuals=[caesar("bpqa qa i amkzmb umaaiom!", 8,false),caesar("BPQA qa I amkzmb umaaiom!", 8, false)];
        for (let i=0 ; i<expecteds.length ; i++)
          expect(actuals[i]).to.equal(expecteds[i]);
    });

});