/**
 * The parseFloat() function parses an argument and returns a floating point number.
 */

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: NaN

/** Return value
  A floating point number parsed from the given value.
  If the value cannot be converted to a number, NaN is returned.
 */

/** Description

  parseFloat is a top-level function and is not associated with any object.
  parseFloat parses its argument, and returns a floating point number.
  If it encounters a character other than a sign (+ or -), numeral (0-9),
  a decimal point, or an exponent,
  it returns the value up to that point and ignores that character and all succeeding characters.
  Leading and trailing spaces are allowed.

  If the value is a string and first character cannot be converted to a number,
  parseFloat returns NaN.

  For arithmetic purposes, the NaN value is not a number in any radix.
  You can call the isNaN function to determine if the result of parseFloat is NaN.
  If NaN is passed on to arithmetic operations, the operation results will also be NaN.

  parseFloat can also parse and return the value Infinity.
  You can use the isFinite function to determine if the result is a finite number (not Infinity, -Infinity, or NaN).

  parseFloat is also able to parse an object if it has a toString or valueOf method defined.
  The returned value is the same as if parseFloat had been called on the result of calling that method.
 */

/* EXAMPLES  */
// The following examples all return 3.14
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));
console.log(parseFloat('3.14more non-digit characters'));

const foo = Object.create(null);
foo.toString = function() {
  return '3.14';
};
console.log(parseFloat(foo));

const foo1 = Object.create(null);
foo1.valueOf = function() {
  return '3.14';
};

console.log(parseFloat(foo1));

/**
  It is sometime useful to have a stricter way to parse float values, regular expressions can help :
  Note that this code is an example only; it does not accept valid numbers such as 1. or .5.
 */

const filterFloat = function(value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

console.log(filterFloat('421')); // 421
console.log(filterFloat('-421')); // -421
console.log(filterFloat('+421')); // 421
console.log(filterFloat('Infinity')); // Infinity
console.log(filterFloat('1.61803398875')); // 1.61803398875
console.log(filterFloat('421e+0')); // NaN
console.log(filterFloat('421hop')); // NaN
console.log(filterFloat('hop1.61803398875')); // NaN
