class User{
    constructor(username){
        this.username = username
    }
    logMe(){
      return  console.log(`Username is ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
let chai = new Teacher("Osama","123@gmail.com")
console.log(chai.createID())
