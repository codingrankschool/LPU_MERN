//ES6 - ECMASCRIPT - 6 - Ecmascript - Official Name of javascript

//There are following features luanched in ES6:
/*
1. Destructuring
2. Spread Operator
3. Rest Operator
4. Skipping Values
5. Default Parameters
6. Arrow functions
7. let/const
8. template literal
9. ES6 Classes
Others
*/


//1. Destructuring: Here it extracts data from objects and arrays into distinct variables.

// let student = {
//     name: "Rakesh", 
//     age: 21,
//     city: "Noida"
    
// }

// let nums = [1,2,3,4, 5]

//name: "Rakesh"
// age: 21,
//city: "Noida"
//Tea(Ginger + Tea leaf + sugar + milk + water) --> Tea Leaf, Milk

//Array Destructuring:

// let nums = [1,2,3,4, 5]

// let [a, b, c, d, e, f] = nums

// console.log(a, b, c, d, e, f)

//Object Destructuring:

// let student = {
//     name: "Chaman",
//     age: 45,
//     city: "Noida"
// }


// let {name:studentName, city} = student

// console.log(studentName, city)


// let student = {
//     name: "Chaman",
//     age: 45,
//     address:{
//         city:"Noida",
//         state: "Uttar Pradesh"
//     }
// }

// let {address:{city, state}}  = student
// console.log(city, state)



// function displayStudentDetails({name, city}){
//         //let {name, city} = student
//         console.log(name)
//         console.log(city)
// }


// displayStudentDetails({name: "Deepak", city:"Noida"})


//Student Task: You've give following object:
/*
employee = {
name: "Albert",
age: 34,
isMarried: true,
    skills: {
        frontendSkills: ["HTML", "CSS", "JS"],
        backendSkills: ["Java", "Sprint Boot", "Nodejs", "Express"]
    }
}

1. Extract name and frontend skills from above
2. print count of backend skills.


*/


//2. Spread Operator: it expands the data or elements of arrays and object
//Syntax: ...variableName

// let nums = [1, 2, 3, 4, 5]

// //let newArr = [...nums]

// let newArr = [0, ...nums, 6]
// console.log(newArr)

//merge array:

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let arr3 = [...arr1, ...arr2]
// console.log(arr3)


//object spreading:

// let student = {
//     name: "Aman",
//     university:"LPU",
//     address: "Noida"
// }

// let newObj = {...student, name: "Dinesh"}
// console.log(newObj)

//Wonderful Examples:


// let students = [
//     {id:1, name:"Chaman", age: 34}, 
//     {id:2, name:"Ritesh", age: 23}, 
//     {id:3, name:"Pawan", age: 19}
// ]

// let newStudent = {id: 4, name: "Chinki", age: 22} 
// console.log(students)
// students = [...students, newStudent]
// console.log(students)


//3. Rest operator(...variableName): it collects values or data and convert into array and objects.

// let nums = [1,2,3,4,5]

// let [a, b, ...newArr] = nums;

// console.log(a, b, newArr)

// let student = {
//     name: "Rakhi",
//     age: 19,
//     city:"Noida"
// }


// let {name, ...newObject} = student;

// console.log(name, newObject)


//4. Default value

// function welcome(name= "Student"){
//     console.log(name, "WELCOME TO LPU!")
// }

// welcome("Rakhi")
// welcome()


//5. Skipping Values:

// let nums = [1,2,3,4,5]

// let [a,,, b] = nums
// console.log(a, b)


//6. Template literal: another way to creating string (``)
let name = "Rakesh", university = "LPU"
//let welcomeMsg = name+" WELCOME TO "+university
let welcomeMsg = `${name} Welcome to ${university}`
console.log(welcomeMsg)


//7. Arrow Function: 

// function welcome(){
//     return "WELCOME ALL!"
// }


// let welcome = ()=>{
//     return "WELCOME ALL!"
// }

let welcome = ()=> "WELCOME ALL!"

console.log(welcome())


//Student Task: create an arrow function to print student details

 
 let printStudentDetails = ({name, city, age})=>{
    console.log(name)
    console.log(age)
    console.log(city)
 }

 printStudentDetails({name:"Chaman", age: 45, city: "Mohali"})


 //Example:

 let employee = {
    name: "Ronak",
    designation: "Developer",
    skills: ["html", "css", "js"],

    //Note: arrow function doesn't have support this keyword it directly represent global this.
    printDetails: ()=>{
        console.log(this.name)
    }
 }

 employee.printDetails()


 //Note: HTML + CSS + JS - Finished!