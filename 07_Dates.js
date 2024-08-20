// Dates
// Date is an object
let myDate = new Date();
//console.log(myDate.toString()); //Tue Jul 16 2024 11:35:13 GMT+0530 (India Standard Time)
//console.log(myDate.getFullYear()); // 2024
//console.log(myDate.toLocaleDateString()); // 16/7/2024
// console.log(myDate.toJSON()); //2024-07-16T06:09:13.578Z
//console.log(myDate.toDateString());//Tue Jul 16 2024

// let date = myDate.toDateString();
// console.log(date[2]);//e

//console.log(myDate.toTimeString());//11:41:43 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());//16/7/2024, 11:42:24 am
// console.log(myDate.getMonth()); // 6

/**************/
// console.log(typeof(myDate));//object

// let myCreatedDate = new Date(2024,6,14);
let myCreatedDate = new Date("07-19-2024");
// console.log(myCreatedDate.toLocaleDateString());//14/7/2024
// console.log(myCreatedDate.toDateString());//Sun Jul 14 2024

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
//console.log(Math.floor(myCreatedDate.getTime()/1000));//1720895400
// let cd = Math.floor(myCreatedDate.getTime()/(1000*60*60));
// convert in second
//console.log(Math.floor(Date.now()/1000));//1721111314
// let pd = Math.floor(Date.now()/(1000*60*60));
// console.log(Math.ceil((cd-pd)/24))// 3 Days difference

let newDate = new Date();
// console.log(typeof(newDate));
// let dayName = newDate.toLocaleString('default', {
//      day: "numeric",
//      weekday: "long"
// })
// console.log(dayName);
// console.log(newDate.toLocaleString());