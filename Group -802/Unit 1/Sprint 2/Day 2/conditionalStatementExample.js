//Conditional Statement: On the basis of condition(using comparison operator) we can give meaninful statement to the users.

//There are following conditional statement:
/*
1. if statement
2. if else statement
3. if else if else statement - (if else ladder)
4. nested if else statement
*/


//1. if statement
/*
syntax:

if(condition){

   if condition is true then only this block will execute.

}

*/

//Example: check you're eligible for job or not

// var isMCADone = false

// if(isMCADone){
//     console.log("You're eligible for job")
// }

// if(isMCADone == false){
//     console.log("You aren't eligible for job")
// }


//1. if else statement
/*
syntax:

if(condition){

   if condition is true then only this block will execute.

}else{
    
    if condition is false then only this block will execute
}

*/

// var isMCADone = true

// if(isMCADone){
//     console.log("You're eligible for job")
// }else{
//     console.log("You aren't eligible for job")
// }

//2 if else ladder, 3. nested if else - When we have more than one condition

// - When you've mutliple independent conditions - if else if else statement(if else ladder)
// - When you've multiple dependent conditions - nested if else.


//Examle: print dayname on basis of day number

// var dayNumber = 3

// if(dayNumber==1){
//     console.log("Monday")
// }
// else if(dayNumber==2){
//     console.log("Tuesday")
// }
// else if(dayNumber==3){
//     console.log("Wednesday")
// }
// else if(dayNumber==4){
//     console.log("Friday")
// }
// else if(dayNumber==6){
//     console.log("Saturday")
// }
// else if(dayNumber==7){
//     console.log("Sunday")
// }
// else{
//     console.log("Invalid Day Number?")
// }


//Example: check job eligiblity

// var studentStream = "MTECH"

// if(studentStream == "MTECH"){
//     //ALL OTHER MTECH RELATED OPERATIONS
// }
// else if(studentStream == "MCA"){
//     //ALL OTHER MCA RELATED OPERATIONS
// }
// else if(studentStream == "BCA"){
//     //ALL OTHER BCA RELATED OPERATIONS
// }
// else{
//     console.log("Invalid student stream.")
// }


//Nested if else statement: When you've mutliple dependent conditions in this case you can use this

/*

if(condition1){

    if(condition2){
    
        if(condition3){
        
        }else{
            }
    }else{
        }
}else{
    }

codition3 ----> conditon2 ----> condition1

*/


//Example: job vote eligiblity
// isInidian = true, age = 18, stateIsUtterPradesh = true

var isInidian = true, age = 17, stateIsUtterPradesh = true

if(isInidian){
   
    //age check point
    if(age >= 18){
        //state check point
        if(stateIsUtterPradesh){
            console.log("You're eligible for vote")
        }else{
            console.log("You're not from uttar pradesh")
        }
    }else{
        console.log("You didn't meet age criteria!")
    }

}else{
    console.log("Not Indian!, You're not allowed to vote")
}


//Student Task: Check a person is eligible for marriage or not
//1. gender == male ----> age >= 21, isGraduationTrue = true, isJob = true
//2. gender == female ----> age >= 18, isGraduationTrue = true
//other cases - invalid gender


//Solution:

var  gender = "male", age = 21, isGraduation = true, isJob = true

if(gender=="male"){

    if(age >= 21){

        if(isGraduation){

            if(isJob){
                console.log("You're eligible for marriage")
            }else{
                console.log("Job criteria failed!")
            }
            
        }else{
            console.log("Graduation is not completed!")
        }

    }else{
        console.log("Age criteria failed!")
    }

}
else if(gender == "female"){

     if(age >= 21){

        if(isGraduation){

            console.log("You're eligible for marriage")
            
        }else{
            console.log("Graduation is not completed!")
        }

    }else{
        console.log("Age criteria failed!")
    }

}else{
    console.log("Invalid Gender")
}


//Logical Operators