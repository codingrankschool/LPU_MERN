//var/let/const? - juts for creating variables, objects and others in js

//Problem 1 with var:

//i having global scope
for(var i=1;i<=10;i++){
}
console.log(i)//11


function hello(){

    //functional scope
    var name = "Rakesh"
}

//console.log(name) //ReferenceError: name is not defined


//Problem 2 with var:
// {
//    var age = 45 
// }

// console.log(age) //45


//Problem 3 with var:
// var name = "Rakesh"
// var name = "Suresh"

//Note: var is having global scope and also functional scope
//Scope: it decides visibility and accessibilty of the variable across program.

//let/const: solved all above problems
//Note: 
//1. let and const having block scope(if they defined inside a block), they have global access if they define globally.


//global scope
// let studentName = "Rakesh"
// const studentPincode = "453682"

// {   
//     //block scope
//     let teacherName = "Suresh"
//     const pincode = '201301'
// }
// console.log(studentName) //Rakesh
// //console.log(teacherName)//ReferenceError: teacherName is not defined

// console.log(studentPincode) //453682
// console.log(pincode) //ReferenceError: pincode is not defined


// function display(){

//     //block scope
//     let name = "Rakesh"
// }

// console.log(name)


//2. using var you can redeclare variable but it is not allowed in case of let and const

// var name = "Rakesh"
// var name = "Jayram"

//let name = "Rakesh"
//let name = "Albert"//SyntaxError: Identifier 'name' has already been declared

//const age = 45
//const age  = 67//SyntaxError: Identifier 'age' has already been declared


const age = 45
//age  = 67 //TypeError: Assignment to constant variable.

let uname = "LPU"
uname = "Parul" //reassignment is allowed.