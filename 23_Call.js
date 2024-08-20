function setUserName(username){
    this.username = username;
}

function createUserName(username,email,password){
    setUserName.call(this,username)

    this.email = email;
    this.password = password;    
}

const chai = new createUserName("chai","chai123@gmail.com",'1234567');
console.log(chai);