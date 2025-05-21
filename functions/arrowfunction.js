const data = {
    Username: "Osama",
    Price: 199,
    WelcomeMessage: function(){
        console.log(`${this.Username},Welcome to my website`);
        console.log(this);
        
    }  
}
//  data.WelcomeMessage()
//  data.Username = "Hassnam"
//  data.WelcomeMessage()
//  console.log(this);

//  const addtwo = function(num1,num2){
//     return num1 + num2
//  }
 const addtwo = (num1,num2) => (num1 + num2)
 
 console.log(addtwo(3,4))