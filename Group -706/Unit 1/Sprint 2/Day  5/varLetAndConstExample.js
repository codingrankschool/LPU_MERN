




//var/let/const? - to create variables and objects in javascript

//var - you know already about var keyword
//Note: var keyword having global scope and functonal scope/
//scope: means visibility and accessiblity of variable and objects across the entire program.


//global scope
// var name = "Sita"
// // console.log(name)

// function welcome(){

//     //functional scope
//     var age = 45
// }

// console.log(age)


//problems with var keyword to declare variables:
//problem 1

// for(var i=1;i<=10;i++){

// }
// console.log(i) //11


//problem 2:

// {

//     var studentName = "Kavya"

// }

// console.log(studentName) //Kavya

//problem 3:

// var uname = "lpu"
// var uname = "parul"


//Above problems solved by let and const
//Note: let and const having block level scope(if they declare within block) else they are also having global scope

//global scope
//let name = "Rakesh"

// {   
//     //block scope
//     let name = "Rakesh"
//     const studentName = "Chinki"
// }

//console.log(name) //ReferenceError: name is not defined
//console.log(studentName) //ReferenceError: studentName is not defined


// for(let i=1;i<=10;i++){

// }

// console.log(i)//ReferenceError: i is not defined

// let name = "Ganesh"
// let name = "Suresh"//SyntaxError: Identifier 'name' has already been declared


// let name = "Ganesh"
// name = "Suresh"//reassignment
// console.log(name)

// const age = 45
// //const age = 56 //SyntaxError: Identifier 'age' has already been declared
// age = 89 //reassignment - TypeError: Assignment to constant variable.


