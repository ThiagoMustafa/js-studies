//Creates a new shallow-copied Array instance from an array-like or irterable object

//Description: Array.from(obj, mapFn, thisArg)
//obj: An array-like or iterable object to convert to an array
//mapFn (optional): Map function to call on every element of the array
//thisArg (optional): Value to use as 'this' when executing mapFn

//String
console.log(Array.from('foo'), "String") //[ 'f', 'o', 'o' ]

//Set
const set = new Set(['foo', 'bar', 'baz', 'foo'])
console.log(Array.from(set), "Set") //[ 'foo', 'bar', 'baz' ]

//Array-like object (arguments)
function f(){
   console.log(Array.from(arguments), "Arguments") //[ 1, 2, 3 ]
}

f(1, 2, 3)

//Arrow function
console.log(Array.from([1, 2, 3], x => x + x), "Arrow function") //[ 2, 4, 6 ]
console.log(Array.from({length: 5}, (value, index) => index), "Arrow function 2") //[ 0, 1, 2, 3, 4 ]


//Sequence generator
const range = (start, stop, step) => Array.from({length: (stop - step) / step + 1}, (_, i) => start + (i * step));
console.log(range(0, 4, 1), "Range 1")
console.log(range(1, 10, 2), "Range 2")

//Generate Alphabet
const regex = RegExp('[A-Z]');
console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)).filter(x => regex.test(x)), "Generate Alphabet")
