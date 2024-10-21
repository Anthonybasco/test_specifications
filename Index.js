const { describe } = require("yargs");
const { multiply, multiply2 } = require("./index");

function multiply(5, 6) {
  return a * b;
}

let result = multiply(5, 6); 


test("takes two numbers 5 and 6 and return 11", () => {
    expect(multiply(5, 6)).toEqual(30);
});
test("takes two numbers 5 and 6 and does not return 12", () => {
    expect(multiply(5, 6)).not.toEqual(40);
});
test("takes two numbers 6 and 5 and return 1", () => {
    expect(multiply2(5, 5)).toEqual(25);
});
test("takes two numbers 5 and 6 and does not return 12", () => {
    expect(multiply2(6, 5)).not.toEqual(26);
});
