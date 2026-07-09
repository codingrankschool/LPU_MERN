


//Higher Order Function:

//How to create function:
//Normal Way:
// function greeting(msg){
//     console.log(msg)
// }

// greeting("Welcome to LPU")
// greeting("Welcome Students")


//Anonymoos Function
// var greetingFun  = function(msg){
//     console.log(msg)
// }


// greetingFun("Welcome to LPU")
// greetingFun("Welcome Students")

//1. In javascript function can accept another function as a argument.


// function greeting(nameGiver){
//     console.log("Welcome "+ nameGiver())
// }

// function giveName(){
//     return "Geeta"
// }

// greeting(giveName)



// console.log(giveName)//[Functotion: giveName]
// console.log(giveName())//Geeta


//2. Function can also return a function

// function greeting(nameGiver){
//     return function(){
//        return "Welcome "+ nameGiver()
//     }
// }

// function giveName(){
//     return "Geeta"
// }

// var someFun = greeting(giveName)

// // var result = someFun()
// console.log(someFun())


//Higher Order Function: a function which can accept another function as an argument and return another function as well such functions are known as Higher Order Function.


/* There are various array's higher order functions
1.map
2.filter
3.forEach
4.reduce
5.find
6.sort
others
*/


//1. map - It is HOF Which is used to transform array element from one state to another and always return new array of same size.

// var nums = [1,2,3,4,5]

var squareElement = function(num){
    return num**2
}

// var squareNums = nums.map(squareElement)
// var squareNums = nums.map(function(num){
//     return num**2
// })
// console.log(squareNums)


//Square only even numbers
// var nums = [1,2,3,4,5]
// var evenSquare = nums.map(function(num){
//     if(num%2==0){
//         return num**2
//     }else{
//         return num
//     }
// })
// console.log(evenSquare) //

// var students = [{name:"Gourvit", age: 15, isJob: false}, {name:"Chinki", age: 35, isJob: true, salary: 150000}, {name:"Pankaj", age: 25, isJob: true, salary: 80000}]


// var transformedStudents = students.map(function(student){
//     if(student.isJob){
//         student.salary += 2000
//     }
//     return student;
// })

// console.log(transformedStudents)

//2. filter(callback): it is also HOF which is used to filter array element based on condition and return the filtered array

// var nums = [1,2,3,4,5]

// var eveNums = nums.filter(function(ele){
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(eveNums)


// var students = [{name:"Gourvit", age: 15, isJob: false}, {name:"Chinki", age: 35, isJob: true, salary: 150000}, {name:"Pankaj", age: 25, isJob: true, salary: 80000}]

// var studentWithoutJobs = students.filter(function(student){
//     if(!student.isJob){
//         return student
//     }
// })

// console.log(studentWithoutJobs)


//3. forEach(callback): It is also HOF which is used to process the array element or print the array elements but it doesn't return anything.


// var cities = ["Punjab", "Phagwara", "Delhi", "Jharkhand", "Noida", "Greater Noida"]

// cities.forEach(function(city){
//     // console.log(city.toUpperCase())
//     if(city.startsWith('P')){
//         console.log(city)
//     }
// })


// var students = [{name:"Gourvit", age: 15, isJob: false}, {name:"Chinki", age: 35, isJob: true, salary: 150000}, {name:"Pankaj", age: 25, isJob: true, salary: 80000}]


// students.forEach(function(student){
//     console.log(student.name)
// })


//4. reduce: it is also HOF which is used to reduce the enitre array into one value

var nums = [1,2,3,4,5]

// var totalOfNums = nums.reduce(function(sum, ele){
//     return sum + ele
// }, 0)

// console.log(totalOfNums)


// var product = nums.reduce(function(sum, ele){
//     return sum * ele
// }, 1)

// console.log(product)

// var string = nums.reduce(function(sum, ele){
//     return sum + ele+" "
// }, "")

// console.log(string)

var students = [{name:"Gourvit", age: 15, isJob: false}, {name:"Chinki", age: 35, isJob: true, salary: 150000}, {name:"Pankaj", age: 25, isJob: true, salary: 80000}]

var totalSalary = students.filter(function(student){
    if(student.isJob){
        return student
    }
}).map(function(student){
    student.salary += 2000
    return student
}).reduce(function(salarySum, student){
    return student.salary + salarySum
}, 0)

console.log(totalSalary )