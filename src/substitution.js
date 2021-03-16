// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if ( !alphabet || alphabet.length != 26) return false;

    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      const index = alphabet.indexOf(char);
      // the following if ensures that All of the characters in the alphabet parameter must be unique
      if (alphabet.substr(index + 1).indexOf(char) != -1) return false;
    }
    input = input.toLowerCase();
    let result = "";
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char === " ") {
        result += " ";
      } else {
        if (encode) {
          const index = realAlphabet.indexOf(char);
          result += alphabet[index];
        } else {
          const index = alphabet.indexOf(char);
          result += realAlphabet[index];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
