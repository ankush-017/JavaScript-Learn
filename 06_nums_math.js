//  const score = 400;
//  console.log(score); // 400
 
//  const balance = new Number(100);
//  console.log(balance); //[Number: 100]

//  console.log(balance.toString()); //100
//  console.log(balance.toFixed(2)); //100.00

//  const otherNumber = 365.25364;

 const otherNumber = 365.25358;
//  console.log(otherNumber.toPrecision(5)); // 365.25 (means upto 5 digit came)
  console.log(typeof(otherNumber.toFixed(2))); //  string

//  const hundreds = 1234567885;
//  console.log(hundreds.toLocaleString('en-IN')); //1,23,45,67,885

 // +++++++++  Maths ++++++++//

// console.log(Math);
console.log(typeof Math); // object
// console.log(Math.abs(-1225)); // 1225
// console.log(Math.round(4.5)); // 5
// console.log(Math.pow(2,5));  // 32

console.log(Math.random()); // always come diffrent value between 0 to 1(exclude);
console.log(Math.floor((Math.random()*6)+1)); // value come between 1 to 6

const min = 10;
const max = 100;

console.log(Math.floor(Math.random()*(max-min+1))+min); // any number between (10 to 100) cane randomly
