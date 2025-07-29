class User{
    constructor(username){
        this.username = username
    }
    callMe(){
        console.log(`User Is ${this.username} `);
    }
    
}
class Teacher extends User{
    constructor(username,email, password){
         super(username)   
        this.email = email;
        this.password = password
    }
    createUser(){
        console.log(`Add Userby ${this.username}`);
        
    }
}
let chai = new Teacher("Hassan", "123@GMAIL.COM","123")
chai.callMe()
let masalachai = new User("Maslachai")

