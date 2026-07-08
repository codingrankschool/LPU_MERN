//Strings: It is collection/set of characters(numbers, letter, special symbols) enclosed within single quotation('') or double quotation("") marks


// var str = "hello"
// var fevoriteLetter = 'a'


//Important Points
/*
1. String is immutable(unchangable) in javascript and even in other programming lagnauge as well.

Why? - Its having most important and secure data therefore by default in all programming language string is immutable.

Example: adhaarNumber, accountNumber, securePin, password, email and other data


2. String follows zero based indexing like array.

*/

var str = "Hello"
console.log(str) //Hello
console.log(str[0]) //H

//updation or change:

str[0] = 'T'

console.log(str)

str = "Rakesh"

console.log(str) //Rakesh


var name = "Rakesh Kumar Mishra"

for(var i=0;i<name.length;i++){
    console.log(name[i])
}


//Inbuilt Methods:
/*
1. str.chatAt(index)
2. str.split()
3. str.length
4. str.toUpperCase()
5. str.toLowerCase()
6. str.startWith()
7. str.endWith()
8. str.substring()
9. str.slice()
and others

*/