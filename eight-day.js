// const tinderUser = new Object() // singleton
// console.log(tinderUser);

const tinderUser = {} // non singleton 
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName :{
            firstName : "hitesh",
            lastName : "choudhary"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

// const obj1 = { 1 : "a" , 2 : "b"}
// const obj2 = { 3 : "a" , 4 : "b"}

// // const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);


// const obj1 = { 1 : "a" , 2 : "b"}
// const obj2 = { 3 : "a" , 4 : "b"}
// const obj3 = { 5 : "a" , 6 : "b"}

// const obj4 = Object.assign({} ,obj1,obj2,obj3)
// console.log(obj4);


// const obj1 = { 1 : "a" , 2 : "b"}
// const obj2 = { 3 : "a" , 4 : "b"}
// const obj3 = { 5 : "a" , 6 : "b"}

// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const user = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]
user[0].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



// ******************** Object de Stracture and json api ***************

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstractor : "Hitesh"
}
// course.courseInstractor
// const {courseInstractor} = course
// console.log(courseInstractor);

const {courseName :name} = course
console.log(name);


// api concept


// api access two object and array
// {
//     "name" :"hitesh",
//     "coursename" :"js in hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]