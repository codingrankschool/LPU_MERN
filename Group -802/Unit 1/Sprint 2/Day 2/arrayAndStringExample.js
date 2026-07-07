//Why Array:

//What if i ask you to store 10 number values
var n1 = 10, n2 = 11, n3 = 12, n4 = 14

//Array: It is data structure like variable which is used to store mutliple values of same type at continous memory allocation and accessed by index where first element of the array is accessed at index 0, second at 1 and so on.

//Declaration of Array:

// var nums = [] // empty array
// console.log(nums)

// //storing/adding some values to array - using index
// nums[0] = 45
// nums[1] = 46
// nums[2] = 47
// nums[3] = 48

// console.log(nums)


// //2. using push method - it pushed element in the last of array.

// nums.push(49)

// console.log(nums)

// //length property - find size of array element

// console.log(nums.length)

// // console.log(nums[0])
// // console.log(nums[2])

// // for(var i=0;i<nums.length;i++){
// //     console.log(nums[i])
// // }

// // for(var index in nums){
// //     console.log(index, nums[index])
// // }


// //array inbuilt methods:

// /*
// push- add at last
// pop - remove the element from last of the array
// shift - remove from front
// unshift - at at front

// join: convent array to string
// substring: find continus some portion of array
// slice: subarray
// splice: remove, add at specific index
// */


// //Note: arrya is not good chioce for deleting and inserting the element, and it is only good for traversing or searching

// var cities = ["Noida", "Phagwara", "Chandigargh", "Delhi"]

// console.log(cities)

// cities.splice(1, 1)

// console.log(cities)

// cities.splice(1, 0, "Shimla")

// console.log(cities)


// [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Type of arrays:
//1. One dimension array:
//2. 2D Array - rows and columns
//3. Multidimension array

//2d: it is collection/set of 1d array
//Declaration of 2d array:

var nums = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
]

//access elemet from the array - arrayName[row][column]

console.log(nums[1][1]) //5
console.log(nums[2][2]) //9


//using loop-
for(var row = 0;row<nums.length;row++){

    var bag = ""

    for(var column = 0;column<nums[row].length;column++){
        bag += nums[row][column]+" "
    }
    console.log(bag)

}

//Student Task:
/*

var nums = [
    [1,2], 
    [4,5,6], 
    [7]
*/

