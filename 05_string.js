const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // hitesh50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
console.log(typeof gameName); // object
// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}

-------- Proto Type  or we say method of string object --------
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(4,10) // last limit(10) is exclude index , start is include index
const anotherString1 = gameName.slice(-8,11) // (negative index counts from end)
console.log(anotherString); // output: sh-hc-
console.log(anotherString1); // output: h-hc-c

const newStringOne = "   hitesh  mmmmm    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white space from left and right

const name = "hitesh"
const repoCount = 50
const gameName = new String('hitesh-hc-com')
// const newString = gameName.substring(0, 4)
// console.log(newString);


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes(".com")) // true

// string.split(separator, limit)
console.log(url.split('-'));
