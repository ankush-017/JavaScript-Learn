class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // This sets the username throught the User class
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new Teacher("Ankush","ak123@gmail.com","1234567");
tea.addCourse();
tea.logMe();

const chai = new User("Ankit");
chai.logMe();
