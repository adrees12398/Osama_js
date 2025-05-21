function addtwonumber(number1 = 2,number2 = 4){
    if(!(number1 || number2)){
        console.log("Please enter the number");
        return
    
    }
    return number1 + number2
}
let result = addtwonumber(2,5);
console.log(result);
