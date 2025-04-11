// primitive data
// number,String,boolean,null,undefined,symbol,BigInt
//non primitive data type
// array, object and functions 
let number = 12346934382394454543454534583n
// console.log(typeof number);
const a = Symbol(123)
const b = Symbol(123)
console.log(a === b);
let array = ["name", "fathername", "address"];        
let object = {
   name : "Osama",
   fathername : "Adrees",
   address : "Farkhabad mainBazar"
}
console.log(object.name);
console.log(object.fathername);
console.log(object.address);
console.log(typeof object);

function name() {
   console.log("Hello Osama");
}
console.log(typeof name);



