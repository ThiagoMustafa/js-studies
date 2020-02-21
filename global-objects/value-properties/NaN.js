/* The global NaN property is a value representing Not-A-Number. */

function sanitise(x) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// expected output: "1"

console.log(sanitise('NotANumber'));
// expected output: NaN

/*

  NaN is a property of the global object.

  The initial value of NaN is Not-A-Number — the same as the value of Number.NaN.
  In modern browsers, NaN is a non-configurable, non-writable property.
  Even when this is not the case, avoid overriding it.

  It is rather rare to use NaN in a program.
  It is the returned value when Math functions fail (Math.sqrt(-1)) or
  when a function trying to parse a number fails (parseInt("blabla")).

*/

/*
  NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value.
  Use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN.
  Or perform a self-comparison: NaN, and only NaN, will compare unequal to itself.
*/

console.log(NaN === NaN); // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true

function valueIsNaN(v) {
  return v !== v;
}
console.log(valueIsNaN(1)); // false
console.log(valueIsNaN(NaN)); // true
console.log(valueIsNaN(Number.NaN)); // true

/*
 However, do note the difference between isNaN() and Number.isNaN():
 the former will return true if the value is currently NaN,
  or if it is going to be NaN after it is coerced to a number,
  while the latter will return true only if the value is currently NaN:
 */

console.log(isNaN('hello world')); // returns 'true'.
console.log(Number.isNaN(NaN)); // returns 'false'.
