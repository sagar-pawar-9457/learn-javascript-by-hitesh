// #primitive datatypes  (call by value)

// 7 types :- String, number,Boolean,null,undefined,symbol,Bigint

const score = 1000;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol ("123")
// console.log(id === anotherId);


const bigNumber = 122222415454n;
// console.log(typeof (bigNumber));



// non primitive datatypes || reference datatypes (call by reference)

// Array,object,functions

const heros = ["shaktiman","naagraj","doga"];


const myObj ={
    name : "hitesh",
    age :22
}


const  myFunction = function(){
    console.log("hello world");
}

// datatypes check 


// console.log(typeof (outsideTemp) ); // object
// console.log(typeof (userEmail)); // undefined




// ******************** Stack vs heap  memory ****************************************************

// primitive datatypes (stack) stack memory any use copy get
let myYoutubeName = "hiteshchodharydotcom";

let anotherName = myYoutubeName
anotherName = " chai aur code"

// console.log(anotherName);
// console.log(myYoutubeName);



// Non primitive datatypes (heap) stack memory any use original  get


let userOne = {
    name :"sagar",
    lastname:"pawar"
}


let userTwo = userOne

userTwo.name = "vishal"


console.log(userOne.name);
console.log(userTwo.name);