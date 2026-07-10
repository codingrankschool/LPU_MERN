



//Note: In javascript its has some internal behaviours as a developer its your reponsiblity to know about them

//1. Hoisting: It takes attendance of your variable and function declartions and then hoist them top of their scope.

/*
Note: when run our javascript code(.js) then one global execution context is creating and within this your javascript runs in two phases:

1. Memory/Compilation Phase - Hoisting perform
    - Here your variables and functions get space in the memory

2. Code/Execution Phase - execution of program line by line
    - Here javascript code execute line by line

Note: in Compilation phase - hoisting being performed internaly where only declaration of variables are hoisted not initialization.
*/

// var name = "Suresh"
// let age = 45
// console.log(name)

// function welcome(){
//     console.log("Swagatam Ji!")
// }

/*
Global Execution Content created

1. Memory/Compilation Phase - Hoisting phase
name = suresh
age = 45
welcome =function(){
    console.log("Swagatam Ji!")
} 

2. Execution/Code Phase

Global Execution Content ended/removed
*/

// console.log(name) //undefined
// console.log(age) //ReferenceError: Cannot access 'age' before initialization

// var name = "Suresh"
// const age = 45

// welcome() //

// function welcome(){
//     console.log("Swagatam Ji!")
// }


/*
Global Execution Content created

1. Memory/Compilation Phase - Hoisting phase
name = undefined
age -> let type
welcome =function(){
    console.log("Swagatam Ji!")
} 

2. Execution/Code Phase
undefined
Swagatam Ji!

Global Execution Content ended/removed
*/