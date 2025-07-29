class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
let chai = new User("Osama")
console.log(chai.createID())