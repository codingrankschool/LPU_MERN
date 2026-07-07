//Why Loop?

//If i ask you to print hello 10 times
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")


//Loop: If you want to execute same line of code again and again - you can use loop
//Looop: Iterative/control statement, Iteration - Round


/*
There are following types of loop in javacsript
1. while loop
2. do while loop
3. for loop
4. for in loop


Syntax while:

while(condition){

}

Syntax do while:
do {
    
}
while(condition)

Syntax for:

for(condition){

}

*/


//Example: Print hello 10 times


//using while loop

// var startingPoint = 1

// while(startingPoint <= 10 - 1){

//     console.log("Hello")

//     // startingPoint += 1
//     startingPoint++

// }

// console.log("----------------------------------")

// //do while loop
// do{
//     console.log("Hello")
//     startingPoint++
// }
// while(startingPoint <= 10)


// console.log("=====================================")

// //for loop

// for(var i=1;i<=10;i++){
//     console.log("Hello")
// }


//Difference between while, do while, and for

//for - when number of iteration is decided.
//while - when number of iteration isn't decided.
//do while - when you want to keep first iteration operational + work of while loop


//Student Task: Reverse the give number
//var number = 12345
// result = 54321
//loop - while loop


// var number = 12345

// // var bag = ""
// var result = 0

// while(number != 0){
//     //console.log(number % 10) //print last digit
//     //bag += number % 10
//     result = result * 10 + number % 10
//     number = parseInt(number / 10)
// }

// // console.log(bag)
// console.log(result)

//Student Task: from 1 to 20, find the the sum or total of prime numbers

//Nested Loop: Loop inside Loop


//Good Example:

//Father in each round - 4 round of son

//Father 1:
//Son Round 1
//Son Round 2
//Son Round 3
//Son Round 4

//Father 2
//Son Round 1
//Son Round 2
//Son Round 3
//Son Round 4

//Father 3
//Son Round 1
//Son Round 2
//Son Round 3
//Son Round 4

//Father 4
//Son Round 1
//Son Round 2
//Son Round 3
//Son Round 4

// for(var father = 1;father <= 4; father++){
//     console.log("Father Round", father)
//     console.log("---------------------------")
    
//     for(var son = 1; son<=4;son++){
//         console.log("Son Round",son)
//     }
// }

/*
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

*/
//outer loop: rows
// for(var father = 1;father <= 4; father++){

//     var bag = ""
    
//     //inner loop: columns
//     for(var son = 1; son<=4;son++){
//         bag+=son+" "
//     }
//     console.log(bag)
// }


// /*
// * * * *
// * * * *
// * * * *
// * * * *

// */
// //outer loop: rows
// for(var father = 1;father <= 4; father++){

//     var bag = ""
    
//     //inner loop: columns
//     for(var son = 1; son<=4;son++){
//         bag+="* "
//     }
//     console.log(bag)
// }



/*
*
* *
* * *
* * * *

*/
// //outer loop: rows
// for(var father = 1;father <= 4; father++){

//     var bag = ""
    
//     //inner loop: columns
//     for(var son = 1; son<=father;son++){
//         bag+="* "
//     }
//     console.log(bag)
// }