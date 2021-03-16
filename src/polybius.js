// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  /*
  function polybius(input, encode = true) {
    const alphabetGrid = {
      1: ["a", "b", "c", "d", "e"],
      2: ["f", "g", "h", "(i/j)", "k"],
      3: ["l", "m", "n", "o", "p"],
      4: ["q", "r", "s", "t", "u"],
      5: ["v", "w", "x", "y", "z"],
    };
    if (encode) {
      input = input.toLowerCase();
      const arrInput = input.split("");
      let result = "";
      arrInput.forEach((char) => {
        if (char === " ") {
          result += " ";
        }else if (char === "i" || char === "j") {
          result += "42";
        }else {
          for (let i = 1; i < 6; i++) {
            column = alphabetGrid[i].indexOf(char);
            if (column > -1) {
              column++;
              row = i;
              result += column;
              result += row;
              break;
            }
          }
        }
      });

      return result;
    } else {
      const splittedInput = input.split(" ");
      const inputWithNoSpace = splittedInput.join("");
      if (inputWithNoSpace.length % 2 != 0) return false;

      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
          const col = parseInt(input[i]) - 1;
          const row = input[i + 1];
          result += alphabetGrid[row][col];
          i++;
        } else {
          result += input[i]; //add space
        }
      }
      return result;
    }
  }
  */

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (encode) {
      input = input.toLowerCase();
      const arrInput = input.split("");
      let result = "";
      arrInput.forEach((ch) => {
        let index = alphabet.indexOf(ch);
        //if ch is alphabet it will be encoded if not it will be ignored
        if (index > -1) {
          if (index >= 9) index -= 1; //index of j will be considered the same as index of i
          const column = (index % 5) + 1;
          const row = Math.floor(index / 5) + 1;
          //console.log(row, column);
          result += column;
          result += row;
        } else {
          result += ch;
        }
      });

      return result;
    } else {
      const splittedInput=input.split(" ");
      const inputWithNoSpace=splittedInput.join("");
      if (inputWithNoSpace.length % 2 != 0) return false;
      
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
          const col = parseInt(input[i]);
          const row = parseInt(input[i + 1]);
          const index = col - 1 + (row - 1) * 5;
          //console.log(index);
          let char = "";
          if (index === 8) char = "(i/j)";
          else if (index > 8) char = alphabet[index + 1];
          else char = alphabet[index];
          //console.log(char);
          result += char;
          i++;
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
