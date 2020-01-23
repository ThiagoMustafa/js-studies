/*
The global undefined property represents the primitive value undefined.
It is one of JavaScript's primitive types.
 */

function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(test(x));
// expected output: "Undefined value!"

/*
undefined is a property of the global object; i.e., it is a variable in global scope.
The initial value of undefined is the primitive value undefined.

In modern browsers (JavaScript 1.8.5 / Firefox 4+),
undefined is a non-configurable, non-writable property per the ECMAScript 5 specification.
Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type undefined.
A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.
A function returns undefined if a value was not returned.
*/

/*
You can use undefined and the strict equality and inequality operators to determine whether a variable has a value.
In the following code, the variable x is not defined, and the if statement evaluates to true.
*/
let x1;
if (x1 === undefined) {
  console.log('x1 is undefined');
} else {
  // these statements do not execute
}

/*
  Note: The strict equality operator rather than the standard equality operator must be used here,
  because x == undefined also checks whether x is null, while strict equality doesn't.
  null is not equivalent to undefined. See comparison operators for details.
 */
