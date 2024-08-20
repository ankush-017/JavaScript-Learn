/*-----------   Part - 1   -----------*/

const myArr = [1,23,45,6,4,7,"Ankush",'K'];
const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[0]); // 1
// console.log(typeof(myArr)) // object Both 
 
// Array Methods
// myArr.push(333);
// console.log(myArr); // [ 1, 23, 45, 6, 4, 7, 'Ankush', 'K', 333 ]
// myArr.pop();
// console.log(myArr); //[ 1, 23, 45, 6, 4, 7, 'Ankush', 'K' ]

// myArr.unshift(9); // add at Start  
// console.log(myArr.includes("Ankush")); // true
// console.log(myArr.indexOf("Ankush")); // 6

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr); //string

/*------       slice , splice       --------*/

// console.log("A " , myArr);
// console.log(myArr.slice(2,6)) // 2 include and 6 exclude;
// console.log("B " , myArr);
// console.log(myArr.splice(2,6)); // Here 2 include as well as 6 also include  && That element remove Array
// console.log("C " , myArr);

/*-----------        Part-2         ---------------*/

// const collage = ["Ankush","Ansh","Ankit"];
// const school = ["Rajeev","Rahul","Priya"];

// collage.push(school); // Array pushed
// console.log(collage[3][0]);// Rajeev

// let newArr = collage.concat(school);// now Both Array merged ...
// console.log(newArr); //[ 'Ankush', 'Ansh', 'Ankit', 'Rajeev', 'Rahul', 'Priya' ]

/*---   Spread Operator ----*/

// const newArr = [...collage, ...school];
// console.log(newArr); //[ 'Ankush', 'Ansh', 'Ankit', 'Rajeev', 'Rahul', 'Priya' ]
// We use spread operator to merge over the concat because the merge more than two arrfay also in easy way;

// const coaching = [1,2,3,[4,5,6],7,["Ankush",[4,5,6]]];
// const newArr2 = coaching.flat(Infinity);
// console.log(newArr2);//[ 1, 2, 3, 4, 5, 6, 7, 'Ankush', 4, 5, 6 ]



// console.log(Array.isArray("Hitesh")); // false
// console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "Ankush"})); // []

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

// Array.isArray
// Array.of
// Array.from