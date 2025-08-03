class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return  `${this._password.toUpperCase()}osama`
    }
    set password(value){
        this._password = value
    }
}
let code = new User("123@gmail.com","abc")
console.log(code.password);

