// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password =password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User("ankush017","ak4001493@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

//=========== BY the way  (Behind the scene)

function User(username,email,password){
    this.username = username;
    this.password = password;
    this.email = email;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea","acdcsd@.com","1234567");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
