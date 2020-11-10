// The copyWithin() method shallow copies part of an array to another location in the same array
// and returns it without modifying its length

const arr1 = ['a', 'b', 'c', 'd', 'e',];
console.log(arr1, 'initial');

// copy to index 0 the element at index 3
console.log(arr1.copyWithin(0, 3, 4)) //[ 'd', 'b', 'c', 'd', 'e' ]

// after copyWithin
console.log(arr1, "after");

//copy to index 1
