// date

let myDate = new Date();
// console.log(typeof myDate); // object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5 ,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");


// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();  // mili second 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000 ); //  second covent 
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default",{
    weekday : "long"
})


//***************** Array ***************************

const myArr = [0,1,2,3,4,5];
// ***************** OR ***********************
const myHeros = new Array (7,8,9,10,11);
// console.log(typeof myArr);
// console.log(myArr);
// console.log(myArr[0]);

// methods Array
// myArr.push(6);
// myArr.push(7);
// myArr.pop(7)
// console.log(myArr);

// myArr.unshift(9); // Adding Element 
// console.log(myArr);
// myArr.shift(9);// remove element
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr));


// slice,splice

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B" , myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c",myArr);
// console.log(myn2);