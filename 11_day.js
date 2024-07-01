// THIS and arrow function in javascript | chai aur #javascript

// THIS  : this keyword is to current conatct create 

// const user = {
//     username : "hitesh",
//     price:999,

//     welcomeMassage : function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     }
    
// }
// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);

// function chai (){
//     console.log(this);
// }
// chai()

// function chai (){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()


// arrow function

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () =>{
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()




// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// ***********************     OR  arrow function****************
// const addTwo =(num1,num2) => num1 + num2
// ***********************     OR  arrow function****************
// const addTwo =(num1,num2) => (num1 + num2)
// console.log(addTwo(3,4));




// Immediately Invoked Function Expressions IIFE | chai aur #javascript


// function chai (){
//     console.log(`Db Connected`);
// }
// chai();

// IIFE ::
// (function chai (){
//     console.log(`Db Connected`);
// })();


(function chai  (){
    // named iife
    console.log(`Db Connected`);
})();

((name) => {
    console.log(`db is connected Two ${name}`);
})(`hitesh`);