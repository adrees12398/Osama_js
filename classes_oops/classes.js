// class User{
//     constructor(username,password,email){
//         this.username = username
//         this.password = password
//         this.email = email
//     }
//     encryptPassword(){
//       return `${this.password}abc`;
//     }
//     uppercase(){
//       return `${this.username.toUpperCase()}`;
//     }
// }
// let chai = new User("Osama",123,"chai@gmail.com")
// console.log(chai.encryptPassword());
// console.log(chai.uppercase());


// behind the scene 
function User(username,password,email) {
        this.username = username
        this.password = password
        this.email = email
}
User.prototype.uppercase = function(){
      return `${this.username.toUpperCase()}`;
}
 let tea = new User("Osama",123,"chai@gmail.com")
console.log(tea.uppercase());
