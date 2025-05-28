const UserEmail = []
// if(UserEmail){
//     console.log("Yes You can LoggIn");    
// }else{
//     console.log("Yes You can't LoggIn");    
// }
// falsey value  0, -0, BigIn 0n , "" ,null, undefined
//truthy value "0","false"," ",[],{},function(){}
// if (UserEmail.length === 0) {
//     console.log("Array is Empty");    
// }
// const EmptyObject = {}
// if (Object.keys(EmptyObject).length === 0) {
//     console.log("Empty Object"); 
// }
// nullish coalescing Operator (??): null undefined
 let val;
//  val1 = 5 ?? null 
 val1 = 5 ?? 10 ?? 11

//  console.log(val1);
 
 // ternury operator
 const marks = 80;
 marks >= 90 ? console.log("Mark greater than 90 ") : console.log("Mark less than 90 ") 
  
 if (marks >= 90) {
    console.log("MArks greater than 90");
 }else{
    console.log("MArks less than 90");

 }