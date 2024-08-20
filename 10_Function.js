/*------------------            Part-1          ----------------------*/

function sayMyName(){
    console.log("Ankush Kumar");
    console.log("Sadan Prasad");
}
// sayMyName();//Ankush Kumar  Sadan Prasad

function addTwoNumbers(a,b){
    return a+b;
    console.log("Ankush"); // Never Print
}
// console.log(addTwoNumbers(5,6.5));//11.5

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} is just logged in`

}

//console.log(loginUserMessage("Ankush"));//Ankush is just logged in
//console.log(loginUserMessage()); // Please Enter a username

/*--------------------------           Part-2            ------------------------------*/

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200)); // 200
//console.log(calculateCartPrice(200,400,500,800)); //[ 500, 800 ]

const user = {
    username: "Ankush",
    price: 1099
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user); //Username is Ankush and price is 1099



