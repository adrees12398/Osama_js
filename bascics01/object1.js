// Literal objects
const mysym = Symbol("Event1")
const data = {
    name: "Osama",
    [mysym]: "Event",
    Full_name: "Adrees",
    email: "OsamaAdrees@gmail.com",
    IsLoggIn: true,
    LastLoggIn: ["Satuarday","Sunday"]
}
// console.log(data.Full_name);
// console.log(data["name"]);
// console.log (data[mysym]);
data.Full_name = "HabibUllah";
// Object.freeze(data)
data.Full_name = "Habib";
// console.log(data);
data.greeting = function(){
    return "Hello User";
    
}
data.greetingtwo = function(){
     return`Hello User ${this.name}`;
      
    
}
console.log(data.greeting())
console.log(data.greetingtwo())





