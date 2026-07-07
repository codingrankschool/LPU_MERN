//Logical Operators: When we've more than one dependend and independent conditions in this case we can use logical operators to make code easy to maintain and easy to read


//There are following types of logical operators:
//1. AND (&&) - When all the given conditions are true then it returns true else return false
//2. OR (||) - When Among many conditions if any of the conditiion is true then it reutrn true else it return false
//3. NOT (!) - It makes true to false and false to true


//Example 1: Print logged in successfully based on following condition:
// username = "admin",  password = "admin123" ---> print "logged in successfully"


//using conditional statement only:

var username = "admin",  password = "admin123"

if(username == "admin"){
    if(password == "admin123"){
        console.log("logged in successfully")
    }else{
        console.log("Invalid password")
    }
}else{
    console.log("Invalid username")
}


//Better readable and less maintable solution: using AND opertor

if(username=="admin" && password == "admin123"){
    console.log("logged in successfully")
}else{
    console.log("Invalid credentials/username and password")
}



//Example 2: check a letter is vowel or consonant

//Solution 1:

// var letter = 'e'

// if(letter == 'a'){
//     console.log("Vowel: ", letter)   
// }
// else if(letter == 'e'){
//     console.log("Vowel: ", letter)   
// }
// else if(letter == 'i'){
//     console.log("Vowel: ", letter)   
// }
// else if(letter == 'o'){
//     console.log("Vowel: ", letter)   
// }
// else if(letter == 'u'){
//     console.log("Vowel: ", letter)   
// }else{
//     console.log("Consonant", letter)
// }

//Better, less maintable and more readable solution: using OR

// if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ){
//     console.log("Vowel: ", letter)
// }else{
//     console.log("Consonant", letter)
// }


//Example: print "You're not allowed" when userId is invalid

var isValidUserId = false

if(!isValidUserId){
    console.log("You're not allowed as you're invalid user")
}

//Student Task: Print "Welcome to Application" if following condtions are true
//1. username = "admin"
//2. password = "admin123"
//3. isIndian == false or isValidId = true
