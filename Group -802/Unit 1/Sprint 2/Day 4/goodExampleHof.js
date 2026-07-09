var student1 = {
    name: "Rakesh",
    age: 45
}

var student2 = {
    name: "Rohan",
    age: 24
}

var student3 = {
    name: "Kunal",
    age: 18
}

// var students = [student1, student2, student3]
var students = [{name: "Rakesh",age: 45}, {name: "Rohan",age: 24},{name: "Kunal",age: 18} ]

var studentGreaterThan40 = students.filter(function(student){
    if(student.age > 40){
        return student
    }
})

// console.log(studentGreaterThan40)

var ageSum = students.filter(function(student){
    if(student.name.startsWith('R')){
        return student
    }
}).reduce(function(acc, student){
    return acc + student.age
}, 0)

console.log(ageSum)
