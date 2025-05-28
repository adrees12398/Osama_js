const languages = {
    JS : "JavaScript",
    py : "Python"
 }
 for (const key in languages) {
    // console.log(`${key} :-${languages[key]}`);  
 }
 let map = new Map()
map.set('Pak',"Pakistan")
map.set('USA',"United State of America")
map.set('Chin',"China")
 for (const [key ,value] in map) {
    console.log(`${key} :-${value}`);  
 }
// let arr = [1,2,3,4,5]
// for (const key in arr) {
// console.log(arr[key]);
// }