function SetUsername(username){
    this.username = username
}
function createUser(username,password,email){
    SetUsername.call(this,username)
    this.password = password
    this.email = email
}
let chai = new createUser("Osama",123,"123@example.com")
console.log(chai);
