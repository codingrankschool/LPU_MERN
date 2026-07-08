//Function: function is block of code which is related to specific functionality


//Declaration of function

function greeting(){
    console.log("Welcome to LPU!")
}


//Note make sure your function must do only one stask at a time.


//In Real Life there is music player application:
//1. playMusic()

function playMusic(){
    console.log("Music stated playging....")
}

//2. playMusic()
function pauseMusic(){
    console.log("Music puased....")
}

//3. playMusic()
function increaseVolumne(){
    console.log("Musice's volumen has increased...")
}


//To Execute these functions - we need to call them by their names


// playMusic()
// playMusic()
// playMusic()
// pauseMusic()
// playMusic()
// increaseVolumne()
// pauseMusic()

//Life cycle of function?
/*
1. creation function
2. call the created function
3. fuction execution started
4. function returns something
5. function execution ended. 

*/

// //1. FUNCTION CREATION - DONE
// function welcomeMessage(){
//     //3. FUNCTION EXECUTION STARTED
//     console.log("Welcome STUDENTS!")
//     //4. FUNCTION WILL RETURN SOMETHING
//     //5. FUNCTION EXECUTION FINISHED
// }

// //2. CALLIING THE FUNCTION - by its name
// console.log(welcomeMessage())



// //Good Example:

// //here name is function parameter(function variable)
// function welcomeMessage(name, city){
    
//     return name+"! Welcome to LPU at "+city
// }

// //here "Simran" is value/actual data/agruments for name function variable
// console.log(welcomeMessage("Simran", "Phagwara"))



//Another Good Example

// function makeArrayElementSquare(nums){

//     var squareArr = []

//     for(var index in nums){
//         squareArr.push(nums[index]**2)
//     }

//     return squareArr

// }

// var result = makeArrayElementSquare([1,2,3,4,5])
// console.log(result)

// console.log(makeArrayElementSquare([1,2,3,4,5]))


//There are following types of functions in javascript:
/*
1. Function Declaration(Normal Function) - Already Discussed
2. Anonymous Function (Function Expression) - Function without name
3. Callback Function
4. Higher Order Function
5. Arrow Function
6. Constructor function
7. Immediately Invoked function expression(IIFE)
8. Generator Function
OThers.
*/


//2. Anonymous Function (Function Expression) - Function without name

var helloFun = function(){
            console.log("Hello Everyone!")
    }

helloFun()

//There are some inbuilt functions:
//1. Inbuilt functions for array
//2. Inbuilt functions for string
//3. Inbuilt functions for maths related opertions - floor, ceil, round, random abs, max, min, pow and others
