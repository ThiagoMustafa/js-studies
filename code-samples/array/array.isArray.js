//The Array.isArray() method determines whether the passed value is an Array

//Array.isArray(value)
//value: The value to be checked

console.log(Array.isArray([1, 2, 3])) //true
console.log(Array.isArray([])) //true
console.log(Array.isArray(new Array())) //true
console.log(Array.isArray({foo: 123})) //false
console.log(Array.isArray('foobar')) //false
console.log(Array.isArray(undefined)) //false
