//Why Operators: to operate between variables value

//var num1 = 45, num2 = 50

//num1 operator num2

//We have following types of operators in javascript
/*
1. Mathematical(Arithmetic) Operators
Example - +, -, *, /, %, **
2. Comparison Operators
3. Logical Operators
4. Unary Operators
6. Others
*/


// var product1 = 200, product2 = 100, product3 = 500
// var eachQuantity = 2

// var totalPrice = (product1 * eachQuantity) +  (product2 * eachQuantity)  +  (product3 * eachQuantity)

// var discount = 20

// var discountedPrice = totalPrice * discount/100

// var finalPrice = totalPrice - discountedPrice

// console.log("Total Price",totalPrice, "Discount Price", discountedPrice, "Final Price", finalPrice)

//Modulus(Reminder) Operator: %

//Example:

console.log(45%2) //1
console.log(67%3) //1
console.log(45%9) //0

//Problem: 27 student
/*
1 - 1 pannel
2 - 2 pannel
3 - 3 pannel
0 - 4 pannel

*/

// console.log(27%4) // 3 - 3 pannel
// console.log(2**3) //8


//2 Comparison Operators: to create comparison between two different values, and they always return boolean result

//There are following comparison operators:
/*
1. >
2. >=
3. <
4. <=
5. ==
6. !=
7. ===
8. !==
*/

//console.log(46 > 45) // true
//console.log(45 > 45) // false
//console.log(45 >= 45) // true

//console.log(46 < 45) // false
//console.log(45 < 45) // false
//console.log(45 <= 45) // true

//console.log(46 == 45) // false
//console.log(47 != 45) // true
//console.log(45 != 45) // false

// Note: javascript internally follows implicit conversion(type coercion)

// console.log("45" == 45) //true

// console.log("45" === 45) //false