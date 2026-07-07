//Loop? - keeps on running, can only stop when you want (based on condition)

//Why Loop?

//What if i ask you to print Hello 10 times.
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

//Solution: Loop - It keeps on executing particular line of statement again and again until the condition is true.


//We have following types of loop in javascript:

/*
1. while loop
2. do while loop
3. for loop
*/


//1. while loop

/*
Syntax:

while(condition){
    statements to execture when condtion is true
}

*/

//Example: print Hello 10 times

//Infinite loop
// while(true){
//     console.log("Hello")
// }


// var startingPoint = 1

// while(startingPoint <= 10 - 2){
//     console.log("Hello", startingPoint)

//     //startingPoint += 1
//     //startingPoint = startingPoint + 1
//     startingPoint++
// }

// console.log("------------------------------")

//do while

/*
do{

}
while(codition)

*/

// do{
//     console.log("Hello", startingPoint)
//     startingPoint++
// }
// while(startingPoint <= 10)


// console.log(startingPoint) //11


// console.log("----------------------------------")


//using for loop

/*
for(startingPoint;condtion; ++/--){
    
}
*/

// for(var i=1;i<=10;i++){
//     console.log("Hello", i)
// }


//Difference between while vs for vs do while
//1. When we don't aware about number iteration - while
//2. When we aware about number iteration - for
//3. When you want first iteration optional then you can use do while


//Student Task: Reverse the given number
//var number = 12345
//output: 54321
//loop: while

//Solution:

// var num  = 12345

// var bag = ""

// var result = 0

// while(num != 0){

//     // console.log(num % 10) //5
//     // bag += num % 10
//     result = result * 10 + num % 10
//     num = parseInt(num / 10)

// }

// // console.log(bag)
// console.log(result)

//Student Task: Find the total or sum of prime number between 1 to 20 (inclusive)


//Nested Loop: Loop inside loop

//Analogies?

/*
Chintu ---->   Kaka Shop for eating golgappas
Chintu ---> 10rs ---> Kaka ---> 3 Pcs Golgappa
Chintu ---> 1 Pc --> 2 Pc -> 3 Pc -> Over

Kaka gave offer - family offer ---> 10rs --> 5pcs
Chinki + Chaman + Chunnu + Munnu + Chintu --->50rs to Kaka
Chintu - 5 Pc
Chinki - 5 Pc 
Chaman - 5 Pc
Chunnu - 5 Pc
Munnu - 5 Pc
*/

// for(chintu = 1; chintu <= 5; chintu++){
//     console.log("Chintu Golgappa", chintu)
//     for(var sibling = 1;sibling <= 4; sibling++){
//         console.log(sibling, "done round", chintu)
//     }
// }


//Analogy
/*
father and son
father's age = 50
son's age = 20
*/

// for(var father = 1;father<=4;father++){
//     console.log("father started round", father)

//     for(var son = 1;son<=4;son++){
//         console.log("Son completed his round", son)
//     }
//     console.log("father completed round", father)
//     console.log("-------------------------------")
// }


/*
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

*/
// //outer loop responsible for rows
// for(var father = 1;father<=4;father++){
//     var bag = ""
// //inner loop responsible for columns
//     for(var son = 1;son<=4;son++){
//         bag += son+" "
//     }
//     console.log(bag)
// }



// /*
// * * * *
// * * * *
// * * * *
// * * * *

// */
// //outer loop responsible for rows
// for(var father = 1;father<=4;father++){
//     var bag = ""
// //inner loop responsible for columns
//     for(var son = 1;son<=4;son++){
//         bag += "* "
//     }
//     console.log(bag)
// }


/*
*
* *
* * *
* * * *

*/
//outer loop responsible for rows
// for(var father = 1;father<=4;father++){
//     var bag = ""
// //inner loop responsible for columns
//     for(var son = 1;son<=father;son++){
//         bag += "* "
//     }
//     console.log(bag)
// }




