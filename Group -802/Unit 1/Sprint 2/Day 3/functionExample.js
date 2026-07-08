// Why? - Without function we are having to write duplicate code again and again which increases redudancy in your code.


//Solution: Function -> Block of code related to specific functionality

//declaration of function

// function add(a, b){
//     console.log(a + b)
// }

// add(12, 56) 

// add(10, 34)


//Analogy: Let's say you frequently use one application - Music Player

//1. play music
//2. puase music
//3. switch to next music
//3. increse volume


// function playMusic(){
//     console.log("Music started playing...")
// }

// function pauseMusic(){
//     console.log("Music paused..")
// }

// function switchNextMusic(){
//     console.log("Musice switched to another song")
// }

// function increaseVolumne(){
//     console.log("Musice volumne Increased")
// }

// playMusic()
// pauseMusic()
// playMusic()


//Note: function is reusable

//Life cycle of function.

//1. creation of function
//2. call function
//3. function exectutes
//4. function returns something
//5. function execution finished


// //creation of function
// function greeting(name, city){
//     // console.log(name+"! Welcome to LPU at", city)
//     console.log("Good Morning!")
//     return name+"! Welcome to LPU at "+city
//     console.log("Hello") //unreachable statement
// }


//calling function - by function name
// greeting("Dinesh", "Phagwara")

//parameters - function variables to use within function
//argument - actual value you pass to function parameter(variable)

//Note: function always returns something.

// console.log(greeting("Dinesh", "Phagwara"))


// function printArrayElement(arr){

//     var squareArray = []

//     for(var index in arr){
//         squareArray.push(arr[index]**2)
//     }

//     return squareArray
// }


// var result = printArrayElement([1,2,3,4,5])
// console.log(result)


//Type of functions in javascript:
/*
1. Normal Function - Already discussed
2. Anonymous Function(function expression)  - function without name
3. Immediately Invoked Function Expression(IIFE)
4. Callback function
5. Higher Order Funciton
6. Constructor Function
7. Recursive Function 
8. Arrow Function
9. Generator Function
*/

//Function expression or anonymous function
var func = function(){
    
    console.log("Anonymous Function")

}

func()

//Student Task:
//There are lots of inbuilt function in javascript:
//Inbuilt function for arrays
//Inbuilt function for strings
//Inbuilt function maths - ceil, floor, round, random, max, min, pow, abs, and others.



































