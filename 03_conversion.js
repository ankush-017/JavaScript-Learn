let score = "hitesh"

// typeof can be used with or without parentheses: typeof x or typeof(x), both work the same.
//console.log(typeof score);
//console.log(typeof(score));
// output of above: string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); //NaN

// "33" => 33
// "33abc" => NaN (Not a Number)
//  true => 1; false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // true
//  console.log(typeof booleanIsLoggedIn); // boolean

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

/*********************** Operations ***********************/

let value = 3
let negValue = -value
// console.log(negValue); error

// console.log(2+2); //4
// console.log(2-2); // 0
// console.log(2*2); //4
// console.log(2**3); // 8
// console.log(2/3); //0.666666666
// if you want upto 2 digit then
// console.log(2/3).toFixed(2); // "0.66" came in string
// console.log(2%3); // 2

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3); // hellohitesh

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2 + 5 + 9 + 8); //122598
// console.log(1 + 2 + "2" + 9 + 6); //3296      first add then treat as string;

// console.log( (3 + 4) * 5 % 3); // 2
// Operator Precedences *, /, %

// console.log(-true); // -1
// console.log(+true); // 1
// console.log(typeof +true); // number
// console.log(-""); // -0
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 * 9
// console.log(num1);
// console.log(num2);
// console.log(num3);
// Done because Assignment from Right to Left;
// first 2*9 calculated
// then num3 = 18
// then num2 = num3, num2 = num1;

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
