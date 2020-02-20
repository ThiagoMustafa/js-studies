/* eslint-disable no-restricted-globals */
/**
 * The isNaN() function determines whether a value is NaN or not.
 * Note: coercion inside the isNaN function has interesting rules;
 * you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.
 */
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// expected output: 3140

/** Return value
  true if the given value is NaN; otherwise, false.
 */

/** Description
  Unlike all other possible values in JavaScript,
  it is not possible to rely on the equality operators (== and ===)
  to determine whether a value is NaN or not, because both NaN == NaN and NaN === NaN
  evaluate to false. Hence, the necessity of an isNaN function.
  */

/** Origin
  NaN values are generated when arithmetic operations result in undefined or unrepresentable values.
  Such values do not necessarily represent overflow conditions.
  A NaN also results from attempted coercion to numeric values of non-numeric
  values for which no primitive numeric value is available.

  For example, dividing zero by zero results in a NaN — but dividing other numbers by zero does not.
   */

/** Confusing special-case behavior
  Since the very earliest versions of the isNaN function specification,
  its behavior for non-numeric arguments has been confusing.
  When the argument to the isNaN function is not of type Number,
  the value is first coerced to a Number.
  The resulting value is then tested to determine whether it is NaN.
  Thus for non-numbers that when coerced to numeric type result
  in a valid non-NaN numeric value (notably the empty string and boolean primitives,
  which when coerced give numeric values zero or one), the "false" returned value may be unexpected;
  the empty string, for example, is surely "not a number."
  The confusion stems from the fact that the term, "not a number",
  has a specific meaning for numbers represented as IEEE-754 floating-point values.
  The function should be interpreted as answering the question,
  "is this value, when coerced to a numeric value, an IEEE-754 'Not A Number' value?"
   */

console.log(isNaN(NaN), 'NaN'); // true
console.log(isNaN(undefined), 'undefined'); // true
console.log(isNaN({}), '{}'); // true

console.log(isNaN(true), 'true'); // false
console.log(isNaN(null), 'null'); // false
console.log(isNaN(37), '37'); // false

// strings
console.log(isNaN('37'), "'37'"); // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN('37.37'), "'37.37'"); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN('37,5'), "'37,5'"); // true
console.log(isNaN('123ABC'), "'123ABC'"); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
console.log(isNaN(''), "''"); // false: the empty string is converted to 0 which is not NaN
console.log(isNaN(' '), "' '"); // false: a string with spaces is converted to 0 which is not NaN

// dates
console.log(isNaN(new Date()), 'new Date()'); // false
console.log(isNaN(new Date().toString()), 'new Date().toString()'); // true

// This is a false positive and the reason why isNaN is not entirely reliable
console.log(isNaN('blabla'), 'blabla'); // true: "blabla" is converted to a number.
// Parsing this as a number fails and returns NaN
