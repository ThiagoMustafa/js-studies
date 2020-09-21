// The Array.of method creates a new Array instance from a variable number of arguments
// regardless of number or type of the arguments

//Array.of(elementN)
//elementN: Elements used to create the array

console.log(Array.of(1))
console.log(Array.of(1, 2, 3))
console.log(Array.of(undefined))

//Diference between Array.of and Array constructor
console.log(Array.of(7))
console.log(new Array(7))
