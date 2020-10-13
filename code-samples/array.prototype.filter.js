/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provider function
 *
 * Sintaxy: let newArray = arr.filter(callback(currentValue[, index, [array]]){}, [, thisArg])
 *  - callback: Function is a predicate, to test each element of the array. Return a value trat coerces to true to keep the element,
 *    or to false otherwise.
 *
 *  It accepts three arguments:
 *  - currentValue: The current element being processed in the array
 *  - index: (optional) The index of the current element being processed in the array
 *  - array: (optional) The array filter was called upon
 *
 * thisArg: (optional) Value to use as "this" when executing callback
 *
 * Return a new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 *
 * filter() does not mutate the array on which it is called
 *
 * The range of elements processed by filter() is set before the first invocation of callback.
 * Elements which are appended to the array(from callback) after the call to filter() begins will not be visited by callback.
 * If existing elements of the array are deleted in the same way they eill not be visited
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result)

function isBigEnough(value){
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered);
