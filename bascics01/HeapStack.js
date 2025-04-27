let studentName = "Osama"
let studentName2 = studentName;
// studentName2 = "Hassan"
// console.log(studentName);
// console.log(studentName2);

// Stack Primitive Datatype Heap Non-Primitive Datatype
let UserOsama = {
    Email : "osama@gmail.com",
}
let UserHassan = UserOsama
UserHassan.Email = "Hassan@gmail.com"
console.log(UserOsama);
console.log(UserHassan);

