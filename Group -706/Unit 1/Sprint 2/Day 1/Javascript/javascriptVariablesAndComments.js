//Single Line Comment
/*
Multiple line comment
line 1
line 2

*/


//Variables: Like a containers which store technical data like - numbers, strings(words), boolean data as well.

//Declaration(creation) of variable

// var name
// var age
// var salary

// //or

// var name, age, salary


//Initialiation at the time declaration
// var name = "Rakesh", age = 45, salary = 56343.900


// console.log(name, age, salary)


//Rules of Variables:
//1. Variable must with letter, doller, and underscore(_)

//var 1name //invalid
var _name //valid
var name //valid

//2. Variable can contain letters, numbers, doller, and underscore(_)

var name1OfStudent //valid
var name$rakesh //valid
var name# //invalid


//3. Variables are case-sensitive in javascript, it means myvar and myVar are different variable

var name
var Name

//4. Can't use javascript inbuilt keywords or predefined words as variable name.


// var if
// var If

//Note: if your variable name having multiple words then following naming conventions are important:

//1. camelCaseNamingConvention

var studentName
var myClassTeacherName
var firstName
var studentFirstName

//2. snake_case_naming_convention

var student_name
var first_name
var last_name
var my_childhood_name