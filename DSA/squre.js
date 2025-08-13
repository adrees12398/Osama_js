function checksquare(num) {
    if(num < 0){
        return false;
    }
    if(num < 2){
        return true;
    }
let left = 2;
let right = Math.floor(num / 2);
while (left <= right) {
   let mid = ((left + right) / 2)
   let squre = mid * mid 
   if (squre === num) {
     return true;
   }  else if(squre < num) {
       left = mid + 1
   } else if(squre > num){
    left = mid - 1
   }   
}
return false;
}
let a = -1;
console.log(checksquare(a));