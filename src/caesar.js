// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input = "", shift, encode = true) {
    // your solution code here
    
    if (!shift || shift > 25 || shift < -25) return false;
    if (!encode) shift*=-1;

    input = input.toLowerCase();
    const arrInput = input.split("");
    const arrResult = [];
    arrInput.forEach((ch) => {
      let index = alphabet.indexOf(ch);
      //if ch is alphabet it will be shifted, if it is not alphabet it will be ignored
      if (index > -1){
        index+=shift;
        if (index>25) index=index-26;
        if (index<0) index=index+26;
        ch=alphabet[index];
      } 
      arrResult.push(ch);
    });

    return arrResult.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
