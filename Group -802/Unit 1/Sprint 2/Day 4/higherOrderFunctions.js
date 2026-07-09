//Higher Order Function: 


//Using Normal Way:

// function welcome(msg){
//     console.log(msg)
// }

// welcome("Welcome to LPU")
// welcome("Welcome Students")


// //Anonymous Function - function without name
// var welcomeFun = function(msg){
//     console.log(msg)
// }


// welcomeFun("Welcome to LPU")
// welcomeFun("Welcome Students")


//1. In JS, function can accept another function as an argument.

// function welcome(nameGiver){
//     console.log("Welcome:", nameGiver())
// }

// function giveName(){
//     return "Sita"
// }


// welcome(giveName)



// console.log(giveName) //[Function: giveName]
// console.log(giveName()) // Function Execution and return value -Sita

// var temp = giveName

// console.log(temp) //[Function: giveName]
// console.log(temp()) // Function Execution and return value -Sita

//2. Function can return another function as well


// function giveGreeting(){
//     // var msg =  function(){
//     //         return 'Welcome to Higher Order Function'
//     //      }

//     // return msg

//     return function(){
//             return 'Welcome to Higher Order Function'
//          }
// }


// var someFun = giveGreeting()
// console.log(someFun())

//Note: a function can accept another as an argument and also return function

// function giveGreeting(nameGiver){

//     return function(){
//             return 'Welcome to Higher Order Function '+ nameGiver()
//          }
// }

// function giveName(){
//     return "Sita"
// }


// var someFun = giveGreeting(giveName)
// console.log(someFun())

//Higher Order Function: a function which can accept another function as an argument and can also return another function they are known as HOF

//In Javascript there are following inbuilt higher order function for only arrays.
/*
1. map(anotherFunction)
2. filter(anotherFunction)
3. forEach(anotherFunction)
4. find(anotherFunction)
5. reduce(anotherFunction)
6. sort(anotherFunction)
others.
*/

//1. map(anotherFunction) - it is used transform the array and always returns array of same size.

// var nums = [1,2,3,4,5]

// var makeSquare = function(num){
//     return num**2
// }

// var squareArr = nums.map(makeSquare)
// var squareArr = nums.map(function(num){
//     return num**2
// })
// console.log(squareArr)


// var nums = [1,2,3,4,5]

// var evenNums = nums.map(function(ele, index){
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(evenNums)


//filter - it filters the array based on given condition and returns the element accodingly

// var nums = [1,2,3,4,5]

// var evenNums = nums.filter(function(ele, index){
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(evenNums) //[ 2, 4 ]


//3. forEach(callback) -> it doesn't reutn anything it is generally used to process the element or print the element.

// var nums = [1,2,3,4,5]

// nums.forEach(function(ele, index){
//     console.log(ele %2 == 0? "Even":"Odd")
// })


//4. reduce- it reduces the entire array to one value.

var nums = [1,2,3,4,5]

//find sum of all above array element:
var sum = nums.reduce(function(sum, ele){
    return sum + ele
}, 0)

console.log(sum)


//find product of all above array element:
var product = nums.reduce(function(sum, ele){
    return sum * ele
}, 1)

console.log(product)

//find product of all above array element:
// var string = nums.reduce(function(sum, ele){
//     return sum + ele +" "
// }, "")

// console.log(string)

//find maximum of given array


