// let array = ["SpiderMan","SupraMan","SpiderMan"]
// for (const arr of array) {
// console.log(`value of ${arr}`); 
// }
let map = new Map()
map.set('Pak',"Pakistan")
map.set('USA',"United State of America")
map.set('Chin',"China")
// console.log(map);
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);    
}


