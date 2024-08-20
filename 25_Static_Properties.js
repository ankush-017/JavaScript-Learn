class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return '123';
    }
}

const hitesh = new User('Ankush');
//console.log(hitesh.createId()); // 123  if us static then this will not accessed

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("ak4001497","ankush1412005@google.com");
iphone.logMe();  