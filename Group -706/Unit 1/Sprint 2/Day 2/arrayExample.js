//Why Array?

//What if i ask you to store 10 different number values
// var n1 = 10, n2 = 11, n3 =12, n4 = 13

//Array: it is a data structure which is used to store multiple values/items of same type at continous memory location and later accessed or updated by index

//Declaration of array:

// var nums = []
//console.log(nums)

//Inialization of array: using index
// nums[0] = 12
// nums[1] = 13
// nums[2] = 14
// nums[3] = 15

//console.log(nums) // [12, 13, 14, 15]

//2. using push and unshift method

//2.1: push - add data end of the array element
//2.2: unshift - add data at the beginning of the array element

// nums.push(16) 
//console.log(nums) // [12, 13, 14, 15, 16]
// nums.unshift(11) 
// console.log(nums) // [11, 12, 13, 14, 15, 16]

//[11, 12, 13, 14, 15, 16]

// console.log(nums[1])
// nums[1] = 17
// console.log(nums)

// console.log(nums[5])
// console.log(nums[6])


//length property - it tells number of element inside array

// console.log(nums.length) //6

// for(var i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         console.log(nums[i])
//     }
// }

//for in

// for(var index in nums){
//     console.log(index, nums[index])
// }


//Note: Make sure array is best choice only for traversing or searaching not deleting and inserting element.


// var cities = ["Chandigarh", "Mohali", "Noida", "Agra", "Phagwara"]


//Type of array:

//1. 1D Array
//2. 2D Array
//3. Multidimension Array

//2D Array: It is collection/set of 1D Array

var nums = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(nums[2][1]) //8
console.log(nums[1][2]) //6

for(var row = 0;row < nums.length; row++){
    var bag = ""
    for(var column = 0;column<nums[row].length;column++){
        bag += nums[row][column] + " "
    }
    console.log(bag)
}

//Student Task:

/*
var nums = [
    [1, 2],
    [4, 5, 6], 
    [9]
]


*/

