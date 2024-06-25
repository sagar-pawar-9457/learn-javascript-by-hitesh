const name = "hitesh"
const repoCount = 50
// ***** or *******************
// const names = new String("hiteshhc")

// console.log(name + repoCount + "value");
// ************ best way using **********************
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("sagarsp")
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("t"));


const gameNames = new String("sagar-sp")

// const newString = gameName.substring(0,4)
// console.log(newString);


// const anotherString = gameNames.slice(-6,4)
// console.log(anotherString);

// const anotherString = gameNames.slice(-6,4)
// console.log(anotherString);



// white space remove commmand 

const newStringOne = "          hitesh     "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace("%20" ,"-"));

// output :-   https://hitesh.com/hitesh-choudhary

// console.log(url.includes("sundar"));
// console.log(url.includes("hitesh"));

const firstName = new String ("hitesh-hc")
// console.log(firstName.split("-"));
// console.log(firstName.split("h"));


// ************* number and maths in javascript ***************************

const score = 400
// console.log(score);
//  or option
const balance = new Number (100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// console.log(balance.toFixed(3));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));


// calculate value 
const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));






// **********************  maths ****************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));



// console.log(Math.random());
// console.log((Math.random() * 10)  + 1);
// console.log((Math.random() * 10)  + 1);

// console.log(Math.floor(Math.random() * 10)  + 1);


const min = 10 
const max = 20

console.log(Math.floor(Math.random( ) * (max - min + 1) + min));