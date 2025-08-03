let a  = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(a);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
const chai = {
    name : "Osama",
    password: 123,
    isTrue : true,
    // data:function () {
    //     console.log("code does't work");
        
    
    // }
}

// Object.defineProperty(chai , "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
if (typeof value !== 'function') {
    console.log(`${key} : ${value}`);
}else{
    console.log("phat giya");
    
}
     
}
