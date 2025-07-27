// const user = {
//  username: "Osama",
//  IsLoggIn: true,
//  password: 123,
//  function(){
//     console.log("Hello Sir");   
//     this
//  }
// }
// console.log(user.IsLoggIn);
// user.function()
function User(username,IsLoggIn,IsloggInCount){
  this.username =  username
  this.IsLoggIn = IsLoggIn
  this.IsloggInCount = IsloggInCount
  return this
}
const user =  new User("Osama",true,7)
const user2 =  new User("JAmeel",false,10)

// console.log(user);
// console.log(user2);

function createUser(username,score){
 this.username = username
 this.score  = score
}
createUser.prototype.increament = function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}
const chai = new createUser("chai",250)
const tea = createUser("tea",280)
// chai.printMe()
String.prototype.truelength  = function () {
console.log(`${this}`);
console.log(`real length: ${this.trim().length}`);
}
let a = "chiyeaurcode     "
a.truelength()










