const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]);

// ******** OR ********************** 
// const another_marvel_heros = marvel_heros.concat(dc_heros);
// console.log(another_marvel_heros);

//  ***************** OR ********************
// const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({name : "hitesh"})); // intersting



let score1  = 100
let score2  = 200
let score3  = 300

// console.log(Array.of(score1,score2,score3));



// ***************   Objects **************************
// singleton // constract se object create is called as singleton
// example : Object.create


// // object literals
// const jsUser = {
//     name : "hitesh",
//     "full name" : "Hitesh chaoudhary",
//     age : 25 ,
//     location : "auragabad",
//     email : "hitesh@google.com",
//     isLoggedIn : false,
//     lastLoginDays : ["monday","saturday"]
// }

// // object access
// console.log(jsUser.email);
// // ******** OR *******
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);




const mysym = Symbol("key1")

const jsUser = {
    name : "hitesh",
    "full name" : "Hitesh chaoudhary",
    [mysym] : "key1",
    // mysym : "mykey1",
    age : 25 ,
    location : "auragabad",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

// console.log(jsUser.mysym); // symbol is data types not use
// console.log(typeof jsUser.mysym);

// symbol object access
// console.log(jsUser[mysym]);
// console.log(jsUser);

jsUser.email = "hitesh@gmail.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(" hello JS user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());


// jsUser.greetingTwo = function(){
//     console.log(` hello JS user ${this.name}`);
// }
// console.log(jsUser.greetingTwo());