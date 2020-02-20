/* eslint-disable no-restricted-globals */
/**
 * The global isFinite() function determines whether the passed value is a finite number.
 * If needed, the parameter is first converted to a number.
 */

function div(x) {
  // eslint-disable-next-line no-restricted-globals
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return 'Number is Infinity!';
}

console.log(div(0));
// expected output: "Number is Infinity!""

console.log(div(1));
// expected output: "Number is NOT Infinity."

/**
 * Return value

    false if the argument is positive or negative Infinity or NaN; otherwise, true.

    isFinite is a top-level function and is not associated with any object.

You can use this function to determine whether a number is a finite number.
The isFinite function examines the number in its argument.
If the argument is NaN, positive infinity, or negative infinity,
this method returns false; otherwise, it returns true.
 */

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite(910)); // true

console.log(isFinite(null)); // true, would've been false with the
// more robust Number.isFinite(null)

console.log(isFinite('0')); // true, would've been false with the
// more robust Number.isFinite("0")
