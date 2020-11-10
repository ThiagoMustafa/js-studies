/*
  The fill() method changes all elements in an array to a static value, from a start index (default 0)
  to an end index (default array.length). It returns the modified array
*/

/*
Syntax: array.fill(value [, start [, end]])
  value: Value to fill the array
  start: Start index, default 0
  end: End index, default arr.length
*/

/*
  If "start" is negative, it is treated as "array.length + start"
  If "end" is negative, it is treated as array.length + end
  "fill" is intentionally generic: it does not require that its this value be an Array object
  "fill" is a mutator method: it will change the array itself and return it, not a copy of it
  if the first parameter is an object, each slot in the array will reference that object
*/

//Examples
console.log([1, 2, 3].fill(4)) //[ 4, 4, 4 ]
console.log([1, 2 ,3].fill(4, 1)) //[ 1, 4, 4 ]
console.log([1, 2 ,3].fill(4, 1, 2)) //[ 1, 4, 3 ]
console.log([1, 2 ,3].fill(4, 1, 1)) //[ 1, 2, 3 ]
console.log([1, 2 ,3].fill(4, 3, 3)) //[ 1, 2, 3 ]
console.log([1, 2 ,3].fill(4, -3, -2)) //[ 4, 2, 3 ]
console.log([].fill.call({length: 3}, 4)) //{ '0': 4, '1': 4, '2': 4, length: 3 }

let arr = Array(3).fill({})
console.log(arr)

arr[0].hi = "hi"
console.log(arr)

