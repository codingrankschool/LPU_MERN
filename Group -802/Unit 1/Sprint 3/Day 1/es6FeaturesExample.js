//ECMASCRIPT - 6 => 2015V to 2016

//There are following importants features launched in ES6
/*
1. Destructuring
2. Spread
3. Rest
4. Let/const
6. default parameters
7. skipping values
8. template literal
9. ES6 Classes
10. Arrow Functions
others.
*/


//1. Destructuring: It extracts the value from object and array into distinct varialbles.

//Array Destructuring.

// let nums = [1,2,3,4,5]

// let [a, b, c, d, e, f] = nums

// console.log(a, b, c, d, e, f) // 1 2 3 4 5 undefined

// //Object Destructuring.
// let student = {name:"Suresh", age:45, city: "Noida"}

// let {name, city}  = student
// console.log(name, city)


// function displayStudent({name, city}){
//     //let {name, city} = student
//     console.log(name)
//     console.log(city)
// }

// displayStudent({name: "Tulsi", city:"Phagwara"})


//Array:

// let names = ["Bablu", "Pinki", "Rakesh", "Deepak"]

// let [name1,,, name2 ] = names;

// console.log(name1, name2)


//2. Spread: it expands the array and objectst(...variableName)

// let nums = [1,2,3,4,5]

//let newArr = [...nums]
// console.log(newArr)

// let newArrWithNewElement = [0 , ...nums, 6]

// console.log(newArrWithNewElement)

// let student = {
//     name: "Tulsi", 
//     city:"Phagwara"
// }


// let newObject = {...student, stream: "BTECH"}
// console.log(newObject)

// let object1 = {
//     name: "Tulsi", 
//     city:"Phagwara"
// }

// let object2 = {
//     studentName: "Pawan", 
//     studentCity:"Noida"
// }


// let mergedObject = {...object1, ...object2}

// console.log(mergedObject)

// let arr1 =  [1,2,3,4,5]
// let arr2 = [6,7,8,9]

// let mergedArr = [...arr1, ...arr2]
// console.log(mergedArr)


//3. rest operator(...variableName): to collect the values into array and object


//array
// var nums = [1,2,3,4,5]
// let [a, b, ...restValues] = nums
// console.log(a, b, restValues) // 1 2 [3,4,5]

//object:

// let student = {
//     name: "Tulsi", 
//     city:"Phagwara",
//     skills: ["HTML", "CSS", "JS"]
// }

// let {name:studentName,...othersValues} =  student;
// console.log(studentName, othersValues)


//6. default values


// function welcome(name="Student"){
//     console.log(name+" WELCOME TO LPU!")
// }

// welcome("Rakesh")
// welcome()


//7. Template Literal

let name = "Rakesh"
let city = "Phagwara"

// let welcomeMsg = "WELCOME "+name

// let welcomeMsg = `Welcome ${name} at city: ${city}`
// console.log(welcomeMsg)

//8. Arrow Function:

// function welcome(){
//     console.log("WELCOME EVERYONE!")
// }

// let welomeFun =   ()=>{console.log("WELCOME EVERYONE!")}
// welomeFun()


// let add = (a, b)=> a + b


// console.log(add(34, 34))


let student = {
    name: "Deepak",

    //Note: in case of arrow function there is no support of this keyword as this is light weight function expression.
    printName: ()=>{
        console.log(this.name)
    }
}

student.printName()


//We're done with html + css + js





