// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("substitution should encode correctly", () => {
    const expecteds = ["jrufscpw", "elp xhm xf mbymwwmfj dne", false, false,"message","y&ii$r&","thinkful",false];
    const actuals = [
      substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"),
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"),
      substitution("thinkful", "short"),
      substitution("thinkful", "abcabcabcabcabcabcabcabcyz"),
      substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false),
      substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"),
      substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false),
      substitution("jrufscpw")
    ];
    for (let i = 0; i < expecteds.length; i++)
      expect(actuals[i]).to.equal(expecteds[i]);
  });
});
