//How to create object in js

//let student = {} //object literal

// let student = null

// if(student){
//     console.log(student)
// }else{
//     console.log("Empty student object")
// }


//If i ask create to 5 student objects

// let student1 = {
//     name: "Sara",
//     address:"Himanchal Pradesh",
//     course:"BTECH"
// }

// let student2 = {
//     name: "Pritam Pyare",
//     address:"Delhi",
//     course:"BTECH"
// }

// let student3 = {
//     name: "Tulsi",
//     address:"Phagwara",
//     course:"BTECH"
// }

//Above approach is not best approach to create objects why?
//1. duplicate template
//2. huges lines of code just for creating few objects
//3. such code is less readable and hard to maintain.


//Solution: using constructor function

//What is Constructor Function? - It is like a blueprint or template to create mutliple using this of same type
//Constructor function follows PascalCaseNamingConvention

function Student(name, address, course){
    //this == student {}

    //states
    this.name = name //{name: name}
    this.address = address//{name: name, address: address}
    this.course = course //{name: name, address: address, course:course}

    //behaviours/methods
    this.printStudentDetials = function(){
        console.log("Student Name: ", this.name)
        console.log("Student Address: ", this.address)
        console.log("Student Course: ", this.course)
    }

}

let student1 = new Student("Rakesh", "Noida", "BTECH")
let student2 = new Student("Tulsi", "Phagwara", "BTECH")
console.log(student1)
console.log(student2) 

//student1.printStudentDetials()
//student2.printStudentDetials()


//In javascript every object having its prototpye - its like bluerpint to create object

//let nums = [1,2,3,4,5]//----> new Array(1,2,3,4,5)

let nums = new Array(1,2,3,4,5)
console.log(typeof nums)//object

