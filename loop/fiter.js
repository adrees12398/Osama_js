const mynumber = [1,3,4,5,5,6,7,5,6,6]
 let a = mynumber.filter( (num) => {
    return num > 4
}
)
// console.log(a);

let users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@example.com",
        isActive: true
    },
    {
        id: 2,
        name: "Sara",
        email: "sara@example.com",
        isActive: false
    },
    {
        id: 3,
        name: "Ahmed",
        email: "ahmed@example.com",
        isActive: true
    }
];

let b =  users.filter(
  (num) => num.isActive === true 
)
console.log(b);

