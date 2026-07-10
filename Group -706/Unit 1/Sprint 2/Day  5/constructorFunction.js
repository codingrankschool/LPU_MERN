




//How to create object in javascript?
//let student = {} //object literal

// let student = null

// if(student){
//     console.log(student)
// }else{
//     student = {}
//     student.name = "Rakesh"
//     student.age = 45

//     console.log(student)
// }


//I want to create 3 student objects

// let student1 = {
//     name:"Rohit Kumar",
//     age: 23,
//     stream: "MTECH"
// }

// let student2 = {
//     name:"Deepak Kumar",
//     age: 26,
//     stream: "MTECH"
// }

// let student3 = {
//     name:"Suman Kumari",
//     age: 19,
//     stream: "MCA"
// }

// let student4 = {
//     name:"Rohit Kumar",
//     age: 23,
//     stream: "MTECH"
// }


//Above way to create multiple object of same type is problematic and have many problems.
//1. duplicate template/strcture
//3. hard to maintain and less to read.
//4. many lines of code just for few objects.


//Constructor function: it is a blueprint or template to create multiple objects of same type.

//Note: while creating constructor function make sure to follow constructor function naming convention:

//PascalCaseNamingConvetion: 

//structure or blueprint to create student object.
function Student(name, age, stream){
    this.name = name
    this.age = age
    this.stream = stream
}


let student1 = new Student("Seema", 45, "MCA")
let student2 = new Student("Seema2", 45, "MCA")
let student3 = new Student("Seem3", 45, "MCA")
let student4 = new Student("Seema4", 45, "MCA")
let student5 = new Student("Seema5", 45, "MCA")
let student6 = new Student("Seema6", 45, "MCA")
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)
console.log(student6)