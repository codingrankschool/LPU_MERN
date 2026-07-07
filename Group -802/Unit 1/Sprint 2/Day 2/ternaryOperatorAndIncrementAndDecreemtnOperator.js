//Ternary Operator: It works as an expression to check particular condition and much more shorter way


/*
Syntax: 

var result = codition ? true : false

*/

//Example: Check number is even or odd

// var number = 20

//number % 2 == 0 ? console.log("EVEN") : console.log("ODD")

// var result = number % 2 == 0 ? "EVEN" : "ODD"

// console.log(result)
// console.log(number % 2 == 0 ? "EVEN" : "ODD")

// console.log(number % 2 == 0 ? number %4 ==0 ? "Divisible by 4" : "Not divible by 4" : "ODD")
// console.log(number % 2 == 0 && number %4 ==0 ? "Even and Divisible by 4" : "ODD")


//Increment and Decrement Operators: they are used to increase the value by 1 or decrese the value by 1

//Increment: ++
//Decrement: --


// var number = 45

// console.log(number++) //45
// console.log(number--) //46


//We can use increment and decrement using two ways:
//post increment/decrement  - bad m - first use my value then i will increase or decrease 
//pre increment/decrement - phle - first i will increase or decrease my value then use me


var number = 45

//post increment
console.log(number++) //print 45 --- 46
//post decrement
console.log(number--) //print 46 --- 45


//pre increment
console.log(++number) //print 46
//pre decrement
console.log(--number) //print 45


//Student Task:

var a = 4, b = 5, c = 7, d = 10

var result = a++ * --b + ++c * d++ + 2 * d++
console.log(result)
