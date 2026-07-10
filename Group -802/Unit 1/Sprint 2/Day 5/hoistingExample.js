//Hoisting: It is an internal behaviour of javascript which is very important to know as developer

//Why is it important to know as developer?


// console.log(name) //undefined

// let name = "Rakesh"

// console.log(name) //Rakesh

// hello()

// function hello(){
//     console.log("WELCOME JI!")
// }

//Why above behaviour? just because of hoisting:

//Hoisting: In the case of this all variables and function declarations attendance being taken.


/*
Note: When we run our javascript code (.js) then one global execution context created where within this context your entire js program runs in two phases.
Global Execution Context
            1. Memory/Compilation/Hoisting Phase
                - Your variables get memory in your computer.
            2. Code/Execution Phase
                - Here your code runs line by line

Note: Only declarations of variables are hoisted not initialization.
*/
// console.log(name)

// var name = "Rakesh"
// var age = 45

// welcome()

// function welcome(){
//     console.log("Welcome to Hoisting..")
// }

//https://pythontutor.com/visualize.html#mode=display


/*

Global Execution created.
1. Phase - Memory allocation phase

name = undefined----> Rakesh
age = undefined----> 45

welcome = function(){
    console.log("Welcome to Hoisting..")
}

2. Execution Phase
print:
undefined
Welcome to Hoisting..


Global Execution ended.

*/


console.log(name)

let name = "Rakesh"
const age = 45

welcome()

function welcome(){
    let name = "Sara"
    console.log(name+ "Welcome to Hositing!")
}


