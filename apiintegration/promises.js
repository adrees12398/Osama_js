const promiseOne = new Promise(function (resolve,reject) {
  setTimeout(() => {
    console.log("asyc is completed");
    resolve()
  },1000);
},)
promiseOne.then(function () {
  console.log("promise consumed !!");
})

new Promise(function (resolve,reject) {
  setTimeout(() => {
    console.log("asyc 2 is completed");
    resolve()
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed !!");
})

const promiseThree = new Promise(function (resolve,reject) {
  setTimeout(function () {
   resolve({userName: "Osama", Email: "osama@Example.com"})
  },1000)
})
promiseThree.then(function (user) {
  console.log(user);
})
const promiseFour = new Promise(function (resolve,reject) {
  setTimeout(() => {
    const Error = false
    if (!Error) {
      resolve({Username:"Osama",password: 123})
    } else {
      reject(
        "SomeThing:Went Wrong"
      )
    }

  }, 1000);
})
  promiseFour.then((user)=>{
console.log(user);
return user.Username
}).then((username)=>{
 console.log(username);
}).catch((Error)=>{
console.log(Error);
}).finally(()=>(console.log("Finally Run the code")
))
// const Promisefive = new Promise(function(resolve,reject){
// setTimeout(() => {
//   const Error = true
//    if (!Error) {
//     resolve({languagename:"JS", password: 123})
//    } else {
//     reject("Something: Went Wrong in Promise Five!!")
//    }
// }, 1000);
// })
// async function name() {
  
//   try {
//     const response = await Promisefive
//   console.log(response);
//   } catch (error) {
//     console.log(error);   
//   }
// }
// name()
const PromiseFive = new Promise(function (resolve,reject) {
  setTimeout( () =>{
  const Error = false
       if (!Error) {
        resolve({
          language: "JS",
          password: 123 
        })
       } else {
         reject("Something: Went Wrong in JS")
       }
  },1000)
})
 const  promisefiveconsumed = async () => {
  try {
    const response = await PromiseFive
    console.log(response);
    
  } catch (Error) {
    console.log(Error);
  }
}
promisefiveconsumed()

//  const  param = async () => {
//   try {
//       const response = await fetch("https://api.github.com/users/Adrees12398")
//   const data = await response.json()
//   console.log(data);
//   } catch (error) {
//     console.log(`E: ${error}`);
    
//   }
// }
// param()
fetch("https://api.github.com/users/Adrees12398").then(
  (response) => {
    return response.json()
  }
).then((data)=>
{
  console.log(data);
  
}).catch((Error) => console.log(`SomeThing: Went very wrong: ${Error}`)
)

