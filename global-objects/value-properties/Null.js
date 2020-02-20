/*
The value null represents the intentional absence of any object value.
It is one of JavaScript's primitive values
*/

function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels('sky'));
// expected output: 0

/*
  The value null is written with a literal: null.
  null is not an identifier for a property of the global object,
  like undefined can be. Instead, null expresses a lack of identification,
  indicating that a variable points to no object.
  In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.
*/

// foo is known to exist now but it has no type or value:
const foo = null;
console.log(foo);

/*
  When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators,
  as the former performs type-conversion.
*/
console.log(typeof null, 'typeof null'); // "object" (not "null" for legacy reasons)
console.log(typeof undefined, 'typeof undefined'); // "undefined"
console.log(undefined === null, 'undefined === null'); // false
console.log(undefined == null, 'undefined == null'); // true
console.log(null === null, 'null === null'); // true
console.log(null == null, 'null == null'); // true
console.log(!null, '!null'); // true
console.log(isNaN(1 + null), 'isNaN(1 + null)'); // false
console.log(isNaN(1 + undefined), 'isNaN(1 + undefined)'); // true
