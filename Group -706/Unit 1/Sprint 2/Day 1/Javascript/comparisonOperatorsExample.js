//Comparison Operators: to compare two variables value and it returns boolean as result(true or false)


//There are following comparison operators:
/*
1. > greater than
2. >= greater than or equal to
3. < less than
4. <= less than or equal to
5. == double equal to
6. != not equal to
7. === triple equal to
7. !== not double equal to

*/

console.log(46 > 45) //true
console.log(45 > 47) //false
console.log(45 >= 45) //true


console.log(46 < 45) //false
console.log(45 < 47) //true
console.log(45 <= 45) //true


console.log(45 == 45) //true
console.log(45 == 67) //false

console.log(45 != 67) //true
console.log(45 != 45) //false


//Note: in case of this operator == javascript internally uses implicity type conversion(type coercion)

console.log(45 == "45") //true
console.log(45 == "45r") //false
console.log(true == 1) //true


console.log(45 === "45") //false


console.log("A"== 65)
