// Global and local scope in javascript 

// let a = 20
// const b = 40
// var c = 60


// console.log(a);
// console.log(b);
// console.log(c);

var c = 300

if (true) {
    let a = 20
    const b = 40
    var c = 60
    d = 80

}

// console.log(a);
// console.log(b);
// console.log(c);


// ******** Scope level and mini hoisting in javascript          ******************************

// function one (){
//     const username = "hitesh"

//     function two (){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()


// function one (){
//     const username = "hitesh"

//     function two (){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     // two()
// }
// one()


function one (){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//*********************  Intersting ************ */

// function addone (num){
//     return num + 1
// }
// addone(5)

// const addTwo = function (num){
//    return num + 2
// }
// addTwo(10)
// addTwo(10)

// const addTwo = function(num) {
//     return num + 2
// }
 

addOne(10)
function addOne(num) {
    return num + 2
}