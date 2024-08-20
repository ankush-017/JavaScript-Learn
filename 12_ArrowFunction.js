// this keyword is used to current context
const user = {
    username: "Ankush",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage(); //Ankush , welcome to website
// user.username = "Sadan Prasad";
// user.welcomeMessage(); //Sadan Prasad , welcome to website

// console.log(this); //{}

// function chai(){
//     console.log(this);
// }
// chai(); 


//===================  Arrow Function  =========================================
// const addTwo = (num1,num2) => {
//     return num1+num2;
// } // Explicit function

// when we use CURLY bracket then use RETURN If we use PARANTHESIS then return not used;

const addTwo = (num1,num2) => (num1+num2) // implicit function

console.log(addTwo(5,6)); // 11 

// const myArr = [2,5,7,8,6,9,3]

// myArr.forEach()


