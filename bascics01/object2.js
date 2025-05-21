// let StudentData = {
// fullname:{
// UserName: "Osama",
// lastName: "Shiekh"
// }
// }

// let StudentData = new Object()
let data = { 1: "a" , 2:"b"}
let data2 = { 3: "c" , 4:"g"}
// let data3 = Object.assign({},data,data2)
let data3 = {...data,...data2};
let user = [
    {
        id: 1,
        UserName: "Hassan"
    },
    {
        id: 2,
        UserName: "Awais"
    },
    {
        id: 3,
        UserName: "Jamil"
    }
]
let c =  user.find(u => u.id === 3)
// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(Object.entries(data));
// console.log(data.hasOwnProperty('1s'));
let course = {
    id : 1,
    fee: 999,
    courseInstructor: "Osama"
}
const {courseInstructor: instructor} = course
// console.log(instructor);
const navbar = ({company}) =>{

}
navbar(company = "Osama")
console.log(navbar());







// console.log(c);