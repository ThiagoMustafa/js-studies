// Returns the value of the first element in the provided array that satisfies the provided testing function
// Syntax: array.find(callback(element[, index[, array]])[, thisArg])

// If a "thisArg" parameter is provided to "find",
// it will be used as the "this" value inside each incovation of the callback
// if it is not provided, then "undefined" is used.

// The find mothod does not mutate the array on which it is called, but the function provided to callback can.
// If so, the elements processed by find are set before the first invocation of callback.
// Therefore:
//      - callback will not visit any elements added to the array after the call to find begins.
//      - If an existing, yet-unvisited element of the array is changed by callback,
//      its value passed to the callback will be the value at the time find visits that element's index.
//      - Elements that are deleted are still visited


const arr1 = [5, 12, 8, 130, 44];

const found = arr1.find(element => element > 10)

console.log(found, "element > 10")

// Find an object by one of its properties
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
]

function isCherries(fruit){
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries), "isCherries")

//Using arrow function and destructuring
const result = inventory.find(({name}) => name === 'cherries')
console.log(result, "Using arrow function and destructuring")

// Find a prime number
function isPrime(element, index, arr){
    let start = 2;
    while (start <= Math.sqrt(element)){
        if(element % start++ < 1) return false;
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime), "without prime number");
console.log([4, 5, 8, 12].find(isPrime), "with prime number");





