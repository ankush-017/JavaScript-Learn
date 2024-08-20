/*----------------      For Loop    ------------------------*/

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
//     //console.log(element);
    
// }

// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
// // let myArray = ["flash", "batman", "superman"]
// // //console.log(myArray.length);
// // for (let index = 0; index < myArray.length; index++) {
// //     const element = myArray[index];
// //     //console.log(element);
    
// // }


// // break and continue

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //    console.log(`Value of i is ${index}`);
    
// // }

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         continue
// //     }
// //    console.log(`Value of i is ${index}`);
    
// // }


// /*++++++++++++++++++++++++++ ( While & do while loop ) ++++++++++++++++*/


// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


/*-------------------       High Order Array Loop      -----------------------*/

// For of loop -----------------------

// const arr = [1,2,3,4,5]
// for (const value of arr) {
//     console.log(value);
// }

// const greeting = "Hello World!";
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }

// Maps -----------------------

 const map = new Map();
 map.set('IN',"Indian")
 map.set('USA',"United state of america")
//console.log(map) // { 'IN' => 'Indian', 'USA' => 'United state of america' }

// for(const [key,value] of map){
//     console.log(key,':- ', value);
// }

// For of loop not iterate in OBJECT-------*----*--*-*----------*-

const myObject = {
    'game1': "Cricket",
    'game2': "Tennis"
}
// for(const key of myObject){
//     console.log(key);
// }

// const myObject = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: 'ruby'
// } 

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);    // give the key in Forin loop
// }

/*-------        forEach Loop      (Call back Function)              -------*/

const coding = ["Js","CPP","Ruby","Java","Python"];
//---------- 1st Method
// coding.forEach( (item)=>{
//     console.log(item);
// })

// ***************  2nd Method

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

/*******------- 3rd method -------*******/
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })  

const myCoding = [
    {
        languageName: "Javascript",
        laguageFile: "js"
    },
    {
        languageName: "Java",
        laguageFile: "java"
    },
    {
        languageName: "Python",
        laguageFile: "py"
    }
]

myCoding.forEach((item)=>{
    //console.log(item.languageName);
})

// +++++++++++++++++    filter  on Array   -----------------

const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter( (num) => (num>4))

const newNums = []
myNums.forEach((num) => {
    if(num>4)
        newNums.push(num);
})

//console.log(newNums);

// In Above Both Ways to filter the element using 'filter' and 'foreach'

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((bk) => (bk.genre === 'History' && bk.edition === 1996))
//console.log(userBooks);

// *********************  map  *******************************************************************************

const myNumbers = [1,2,3,4,5,6,7,8,9,10,11]

//const newNum = myNumbers.map((num) => (num+10));

const newNum = myNumbers.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>=60));
//console.log(newNum); // [ 61, 71, 81, 91, 101, 111 ]

//+++++++++++---------++++++++++++-----------     Reduce     +++++++++++++++++++++++--------------------------++

const myArray = [1,2,3,4,5];

const initialValue = 0;
const myTotal = myArray.reduce((acc,currVal) => (
    //console.log(`acc: ${acc} and currVal: ${currVal}`),
    acc+currVal),initialValue)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 299
    },
    {
        itemName: "Mobile dev course",
        price: 4999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(priceToPay);








