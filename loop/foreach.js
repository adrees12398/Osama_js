const arr = ["JavaScript","Python","Ruby"]
// arr.forEach(
//     function (item){
// console.log(item);

//     }
// // )
// arr.forEach( (item) => {
// console.log(item);
// })
// function print(item){
// console.log(item);

// }
// arr.forEach(print)

// const mycoding = [
//     {
//         languagename : "JavaScript",
//         languagefile: "Js"
//     },
//     {
//         languagename : "Java",
//         languagefile: "Java"
//     },
//     {
//         languagename : "python",
//         languagefile: "py"
//     },
    
// ]
// mycoding.forEach(
//     (item) => {
// console.log(item.languagefile);

//     }
// )
const number = [1,2,3,4,5,6,7,8]
// let a = number.forEach(
//     (num) => {
//         num > 4 
//     }
// )
// console.log(a);
const mynewNums = []
number.forEach(
    (nums) => {
        if (nums > 4) {
            mynewNums.push(nums)
        }
    }
)
console.log(mynewNums);


