// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == "2"); // true
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // both true
// console.log("02" > 1);
// console.log("02" > "1"); // false (lexical comparison 0 is not greater then 1 that's why it is false)
// When using comparison operators (>, <, >=, <=), JavaScript converts a string to a number if the other operand is a number.
// "02" (string) is converted to 2 (number).

console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0); // true
console.log(null === 0); // false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); //All three "false"

// ==   (Loose Comparision) Converts types if needed before comparing
console.log(5 == "5");   // true  (string "5" converted to number 5)
console.log(5 === "5");  // false (different types: number vs. string)

console.log(0 == false);  // true  (false converted to 0)
console.log(0 === false); // false (number vs. boolean)

console.log(null == undefined);  // true (special case in JS)
console.log(null === undefined); // false (different types)

console.log([] == false);  // true  (empty array converted to "")
console.log([] === false); // false (array vs. boolean)

// ===  (Strict Comparison)	Compares both value and type without conversion
console.log("2" === 2); // false
const An = "Ankush is a good human being";
console.log(An.split(" "));
