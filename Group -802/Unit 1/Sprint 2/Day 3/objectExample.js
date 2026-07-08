//Explore about Object?
//In javascript object is collection of entries where each entry in key-value:

//declaration of object:

var student = {} //object literal

// console.log(student)

//storing data to object - you can do by following two ways:
//1. using dot notation(.)
//1. using square bracket notation([])


//student states/properties/attributes
student.name = "Rakesh" // {name:"Rakesh"}
student.age = 45 //{name:"Rakesh", age:45}
student["isMarried"] = true //{name:"Rakesh", age:45, isMarried:true}


//student object behaviours/functionalities
student["printDetils"] = function(){
    console.log("Printing student details")
}

//In javascript object is collection of state and behaviour
//Note: keys are always in string in javascript object

// console.log(student)

// {
//   name: 'Rakesh',
//   age: 45,
//   isMarried: true,
//   printDetils: [Function (anonymous)]
// }

//Accessing the value from the object:
//1. using dot notation (.)
//2. square bracket notation ([])

// console.log(student.name)
// console.log(student["age"])

// student.printDetils()


var student = {}


var account = {

    //state of account object - how it looks
    accountHolderName: "Rakesh Kumar",
    accountNumber: "12345678",
    availableBalance: 500,

    //inner object
    address:{
        city:"Noida",
        state: "UP",
        pincode:"201301"
    },


    //behaviours of account object - how it acts/works
    checkBalance: function(){
        console.log("Checking Balance")
        console.log("Available Balance is:",this.availableBalance)
        //this == account
    },
    depositAmount:function(accountNumber, amount){
        console.log(amount," is being credited to your account",accountNumber)
    }
}


// console.log(account.availableBalance)

account.checkBalance()


//Student Task:

//Create an object Employee with followings:
/*
keys:
employeeName
employeeDesignation
employeeSalary
employeeAddress
printEmployeeDetails: name, designation, salary, address

1. call printEmployeeDetails method

*/

var employee = {
    employeeName: "Albert",
    employeeDesignation: "Senior Developer",
    employeeSalary: 250000.00,
    employeeAddress: "Noida",

    printEmployeeDetails:function(){
        console.log("Employee Name: ",this.employeeName)
        console.log("Employee Designation: ",this.employeeDesignation)
    }
}


employee.printEmployeeDetails()


//Array of object:


// var students = [{name:"Bhumika"}, {name:"Simran"}, {name:"Geeta"}]

// console.log(students[1].name)


// for(var i=0;i<students.length;i++){
//     console.log(students[i].name.toLowerCase())
// }


var mobile = {
    brand: "Samsung",
    model:"S26",
    price: 120000
}

for(var key in mobile){
    console.log(key, mobile[key])
}

console.log(Object.keys(mobile))
console.log(Object.values(mobile))
console.log(Object.entries(mobile))