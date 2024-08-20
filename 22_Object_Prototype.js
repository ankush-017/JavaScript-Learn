function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));;  // 25
console.log(multiplyBy5.power);  // 2
console.log(multiplyBy5.prototype);  // {}

function createUser(username,score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increament = ()=>{
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


//-----------------Prototype---------------------//

// let myName = "Ankush     ";
// console.log(myName.trueLength);

let myHeros = ["thor",'spiderman']

let heroPower ={
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy Power i s${this.spiderman}`);
    }
}

Array.prototype.ArrayAnkush = ()=>
    console.log('Ankush Says Hello');

Object.prototype.hitesh = ()=>{
    console.log("Ankush is present in all iobjects");
}

// heroPower.hitesh(); // Ankush is present in all iobjects
//myHeros.hitesh(); // Ankush is present in all iobjects
 
myHeros.ArrayAnkush(); // Ankush Says Hello
//heroPower.ArrayAnkush();  //  Error


/* Interview Question */
// Note  'this' is not work in arrow keyword
let Firstname = "Ankush             ";
console.log(Firstname.length); // 19

String.prototype.trueLength =  function(){
    console.log(`True Length: ${this.trim().length}`);
}

Firstname.trueLength();