/* -----------------    Part-1    -----------------*/

// object literals

const mySym = Symbol();

const User = {
    name: "Ankush",
    "full_name": "Ankush Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Noida",
    email: "ak4001493@gmail.com",
    isLoggedIn: false,
};

// console.log(User.email);
// console.log(User["full_name"]);
console.log(User[mySym]); // myKey1
// console.log(typeof [mySym]);// Object

// User.age = 27;
// //Object.freeze(User); // Now no change effect on Object

// // console.log(User);

// User.greeting = function(){
//     console.log("Hello Everyone");
// }
// User.greeting2 = function(){
//     console.log(`Hello Everyone, How are you ? ${this.name}`);
// }
// console.log(User.greeting());
// console.log(User.greeting2());

// /*----------------     Part-2      ------------------------*/
// // Singleton Object
// const tinderUser = new Object();

// tinderUser.id = "Ankush017";
// tinderUser.name = "Ankush";

// //console.log(tinderUser);// { id: 'Ankush017', name: 'ANkush' }

// // Nested Object
// const regularUser = {
//     email: "ak4001493@gmail.com",
//     fullName: {
//         userFullname: {
//             firstName: "Ankush",
//             lastName: "Kumar",
//         }
//     }
// }

// //console.log(regularUser.fullName.userFullname.lastName); // Kumar

// // Merge object

// const obj1 = {1: "a",2:"b"};
// const obj2 = {3: "c", 4: "d"};

// //const obj3 = Object.assign({},obj1,obj2);
// // console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1,...obj2};
// //console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// // Array of object
// const Users = [
//     {
//         id: "Ankush017",
//         email: "ankush014@gmail.com"
//     },
//     {
//         id: "Ankush017",
//         email: "ankush014@gmail.com"
//     },
//     {
//         id: "Ankush017",
//         email: "ankush014@gmail.com"
//     },
//     {
//         id: "Ankush017",
//         email: "ankush014@gmail.com"
//     },
//     {
//         id: "Ankush017",
//         email: "ankush014@gmail.com"
//     }
// ];

// console.log(Users[1].email); // ankush014@gmail.com
// console.log(tinderUser);

// console.log(Object.keys(Users[1])); // [ 'id', 'email' ]
// console.log(Object.values(Users[2])); // [ 'Ankush017', 'ankush014@gmail.com' ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', 'Ankush017' ], [ 'name', 'Ankush' ] ]

// console.log(tinderUser.hasOwnProperty('name')) // true


/*-----------------------        Part-3         ------------------------*/

// const course = {
//     coursename: "Booster",
//     price: "1099",
//     courseinstructor: "Ankush"
// }

//course.courseinstructor;
// const {courseinstructor} = course;
// console.log(courseinstructor); // Ankush
// const {courseinstructor : instructor} = course;
// console.log(instructor); // Ankush

//  {
//     "name": "Ankush",
//     "batch": "Olampiyad",
//    "price": "99"
//  }







