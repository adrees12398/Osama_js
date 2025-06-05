// let myNums = [11,22,33,45,56,67,48]
// let result = myNums.map((num) => num - 10  )
// console.log(result);

let Number = [1,2,3,4,5,6]
let result = Number
                 .map((num) => num * 10 )
                 .map((num) => num + 1 )
                 .filter((num) => num >= 40)

  console.log(result);
                 
