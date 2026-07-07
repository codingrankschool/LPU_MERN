//Ternary Operators: It is an expression which is much more shorter way of writing if else statement or nested if else statement.

/*

Syntax:
var rseult = condition ? true : false
*/

//Example: check a number is even or odd

var num = 44

// num % 2 == 0 ? console.log("EVEN") : console.log("ODD") 

// var result = num % 2 == 0 ? "EVEN" : "ODD"
// console.log(result)

// console.log(num % 2 == 0 ? "EVEN" : "ODD")


//Example: print Divible by 4 if number is both even and divible by 4


// console.log(num % 2 == 0 ? num % 4 == 0 ? "Even and  Divible by 4" :"Not Divible by 4" : "ODD")

// console.log(num % 2 == 0 && num % 4 == 0 ? "Even and  Divible by 4" : "ODD")


//Increment and Decrement Operator: to increase or decrease the value by 1
//Increment: ++
//Decrement: --

var num = 45

//post increment
console.log(num++) //print 45 ---> 46 
//post decrement
console.log(num--) //print 46 ---> 45

//pre increment
console.log(++num) //46
//pre decrement
console.log(--num) //45

//Note: you can use increment and decrement operator by following two ways:

//1. Post Increment/Decrement -- bad m --> use operator after variable name
//Note: It increase or decreases the value after use by current operation

//2. Pre Increment/Decrement -- phle  --> use operator before variable name
//Note: It increase or decreases the value before use by current operation


//Student Task:

// var a = 4, b = 5, c = 10, d = 11

// var result = ++a * d + 3*b++ * ++d + ++c * --c

// console.log(result)
