//How to do we create conditions: using comparison operators

//Conditional Statment: on basis of condition we give meaningful stateemnt to the users

//There are following conditional statements:
/*
1. if statement
2. if else statement
3. if else if else statement
4. nested if else statement
*/

//if statement
if(condition){
    //if condition is true
}

// var age = 12

// if(age >= 21){
//     console.log("Eligible for Marriege")
// }

// if(age < 21){
//     console.log("Not Eligible for Marriege")
// }


//if else statement

// if(condition){
//     //if condition is true
// }
// else{
//     // if condition is false
// }

// if(age >=21 ){
//     console.log("Eligible for Marriege")
// }else{
//     console.log("Not Eligible for Marriege")
// }
    
    
//if else if else statement: When you've multiple independent conditions then you can go for this if else ladder - if any of the condition is true then code inside that block will execute or if any of the condiiton is true then code inside else block will execute.

//syntax
// if(condition1){

// }
// else if(condition2){

// }
// else if(conditon3){

// }else{

// }

//Example: on the basis of number print dayName

var dayNumber = 3

if(dayNumber == 1){
    console.log("Monday")
}
else if(dayNumber == 2){
    console.log("Tuesday")
}
else if(dayNumber == 3){
    console.log("Wednesday")
}
else if(dayNumber == 4){
    console.log("Thursday")
}
else if(dayNumber == 5){
    console.log("Friday")
}
else if(dayNumber == 6){
    console.log("Saturday")
}
else if(dayNumber == 7){
    console.log("Sunday")
}
else{
    console.log("Invalid Day")
}


//4. Nested if else statement: When one condition is connected another condition

var username = "admin"
var password = "admin"

if(username == "admin"){

    //check for password
    if(password == "admin"){
        console.log("Logged in successfully")
    }else{
        console.log("Invalid password")
    }
}else{
    console.log("Invalid username")
}

//Problem: print Eligible for marriage based on following condition:
/*
gender: female ----> age = 18
gender: male ----> age = 21


*/

var gender = "male"
var age = 17

if(gender == "male"){
    if(age >= 21){
        console.log("Hey Male! - You're eligble")
    }else{
        console.log("Budbag you're bachchha")
    }
}
else if(gender == "female"){
    if(age >= 18){
        console.log("Hey Female! - You're eligble")
    }else{
        console.log("Stay at home and buld your future")
    }
}else{
    console.log("Invalid gender")
}


