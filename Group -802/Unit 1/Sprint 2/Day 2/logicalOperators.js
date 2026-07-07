// Logical Operators: They are useful when you're mutliple dependent conditions or you can say it stops you to make your code less reedable and hard to maintain.


//1. AND (&&) -> It returns true when all the give conditions are true
//2. OR (||) -> It returns true - When among many conditions if any of the condition is true
//3. NOT (!) -> it makes true ---> false and false----> true


//Example: print logged in successful:

// var username = "admin@gmail.com"
// var password = "12345"

// if(username == "admin@gmail.com"){
//     if(password == "12345"){
//         console.log("Logged in successfully")
//     }else{
//         console.log("Invalid password")
//     }
// }else{
//     console.log("Invalid username")
// }

// //Better solution and readable solution using AND

// if(username == "admin@gmail.com" && password == "12345"){
//     console.log("Logged in Successfully")
// }else{
//     console.log("Invalid credentials")
// }


//Check a letter is vowel or consonant; 

var letter = 'e'

if(letter == 'a'){
    console.log("Vowel")
}
else if(letter == 'e'){
    console.log("Vowel")
}
else if(letter == 'i'){
    console.log("Vowel")
}
else if(letter == 'o'){
    console.log("Vowel")
}
else if(letter == 'u'){
    console.log("Vowel")
}else{
    console.log("consonant")
}

//Better solution and readable solution using - OR

if(letter == 'a' || letter == 'e' || letter == 'o' || letter == 'u' || letter == 'i'){
    console.log("Vowel")
}else{
    console.log("Consonant")
}

//Not operator: !

//Example: print Party if saturday, in other case print study

var isSaturday = true

if(!isSaturday){
    console.log("Study")
}else{
    console.log("Party")
}


var isValidId

if(!isValidId){
    //////
}


//Student Task: Check following cases:
//1. username == "admin" , password == "admin", === isValidId = true or isIndian == true --- print - valid person
//else - invalid person