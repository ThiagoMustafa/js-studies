// The concat() method is used to merge tow or more arrays.
// This method does not change  the axisting arrays, but instead returns a new array.

// const new_array = old_array.concat(value1, value2, valueN)
// valueN: optional - Arrays and/or values to cancatenate into a new array.
// if all valueN parameters are omitted, concat return a shallow copy of the existing array on which it is called.

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);

console.log(arr3) //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

const letters = ['a', 'b', 'c']
const alphaNumeric = letters.concat(1, [2, 3])

console.log(alphaNumeric) //[ 'a', 'b', 'c', 1, 2, 3 ]

//Nested Array
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);
console.log(numbers) //[ [ 1 ], 2, [ 3 ] ]

//Modify the first element of num1
num1[0].push(4)

//The result of "numbers" was modified too
console.log(numbers) //[ [ 1, 4 ], 2, [ 3 ] ]

