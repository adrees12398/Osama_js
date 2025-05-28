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

const mycoding = [
    {
        languagename : "JavaScript",
        languagefile: "Js"
    },
    {
        languagename : "Java",
        languagefile: "Java"
    },
    {
        languagename : "python",
        languagefile: "py"
    },
    
]
mycoding.forEach(
    (item) => {
console.log(item.languagefile);

    }
)