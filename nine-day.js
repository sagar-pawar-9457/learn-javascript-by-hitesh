// *********************** Function *****************************

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function myFunction (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// myFunction()

// function addTwo (num1 , num2) {
//    console.log( num1 + num2);
// }
// addTwo()



// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  addTwo(3,4)

 
// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  addTwo(3,"4")


// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  addTwo(3,"a")



// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  addTwo(3,null)


// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  addTwo(3,undefined)




// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
//  }
//  const  result = addTwo(3,4)

//  console.log(result);


 
// function addTwo (num1 , num2) {
//     console.log( num1 + num2);
// }
// const  result = addTwo(3,4)

// console.log("Result :",result);


// function addTwo (num1 , num2) {
//     let result  = num1 + num2
//      return result
// }
// const  result = addTwo(3,4)

// console.log("Result :",result);



// function addTwo (num1 , num2) {
//     let result  = num1 + num2
//      return result
//      console.log("hitesh");  // return after than opearation not execute 
// }
// const  result = addTwo(3,4)

// console.log("Result :",result);


// function addTwo (num1 , num2) {
//     let result  = num1 + num2
//      console.log("hitesh");  
//      return result
// }
// const  result = addTwo(3,4)

// console.log("Result :",result);


// function loginUserMessage (username){
//     return `${username} just logged in `
// }
// loginUserMessage("hitesh")



// function loginUserMessage (username){
//     return `${username} just logged in `
// }
// console.log(loginUserMessage());



// function loginUserMessage (username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage());


// function loginUserMessage (username){
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage());


// function loginUserMessage (username = "sam"){
//     if(!username){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("hitesh"));


// ************************         *********************************

// function calculateCartPrice(num) {
//     return num
// }
// console.log(calculateCartPrice(200,400,500));



// function calculateCartPrice(...num) {
//     return num
// }
// console.log(calculateCartPrice(200,400,500));




// function calculateCartPrice(val1,val2,...num) {
//     return num
// }
// console.log(calculateCartPrice(200,400,500,2000));


// const user = {
//     username : "hitesh",
//     price : 199

// }

// function handleObject (anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

// }
// // handleObject(user)
// handleObject({
//     username : "sam",
//     price :399
// })



const myNewArray = [ 200,400,100,600]

function returnSecondValue (getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));