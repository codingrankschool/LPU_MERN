//Object: it is a real world entity which is having state and behviours where state tells how they look and behavior how they behave


//Object: it is collection of key-value pair and it can store hatrogenous type of data.

//where key-value pair - one entry, in an object we can have mutlple entries.


//Declartion of object:

var student = {} //object literal
// console.log(student) //{}

//Initialization(storing data) of object - there are two ways to add data to the object
//1. using dot notation(.)
//2. using square bracket notation([])

//Note: using above two ways we can also access data and update data.


//states/properties/attributes
 //using dot notation
 //student.name = "Rakesh" // {name:"Rakesh"}
 //student.age = 45 // {name:"Rakesh", age: 45}
 
 //using square bracket notation
 //student["isMarried"] = true // {name:"Rakesh", age: 45, isMarried: true}
 //student["skills"] = ["HTML", "CSS", "JS"] // {name:"Rakesh", age: 45, isMarried: true, skills:["HTML", "CSS", "JS"]}

 //console.log(student) // {name:"Rakesh", age: 45, isMarried: true, skills:["HTML", "CSS", "JS"]}


//behaviours/functionalities

// student.printDetails = function(){
//     console.log("Printing student details")
// }

// student.address = {
//     city: "Noida",
//     state:"UP",
//     pincode:"201301"
// }

// console.log(student)


//accessing the entries from obejct i mean key's value:
//using two ways: 1. dot notation, 2. square bracket notation

//using dot notation
// console.log(student.name)
// console.log(student.age)


// //using square bracket nottaion
// console.log(student["skills"])
// console.log(student["isMarried"])

// console.log(student["address"]["city"])


// var account = {

//     //states about account object
//     accountHolderName: "Albert",
//     accountNumber:"123456",
//     availableBalance: 5000,
//     address:{
//         city:"Phagwara",
//         state: "Punjab",
//         pincode:"423232"
//     },

//     checkBalance:function(accountNumber){
//         console.log("Checking balance")
//         if(accountNumber == this.accountNumber){
//             console.log("Availale Balance:", this.availableBalance)
//         }else{
//             console.log("Inavlid account Number")
//         }
//     },
//     depositAmount(accountNumber, amount){

//         if(accountNumber == this.accountNumber){
//             this.availableBalance += amount
//             console.log(amount, "is credited to your account", accountNumber)
//         }else{
//             console.log("Inavlid account Number")
//         }
        
//     }
// }

// account.checkBalance("123456")
// account.depositAmount("123456", 1000)
// account.checkBalance("123456")


//Student Task: Create one employee object with followings keys:
/*
keys:
name:
salary:
designation:


printEmployeeDetails: name, salary, designation


*/



