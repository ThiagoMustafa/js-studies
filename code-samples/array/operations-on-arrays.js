
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5, 7];

// INTERSECTION: RETURNS ITEMS THAT EXISTS IN BOTH ARRAYS
const intersection = arr1.filter(x => arr2.includes(x));
console.log(intersection, "INTERSECTION");


//UNION: RETURN A NEW ARRAY WITH ALL ITEMS OF BOTH ARRAYS
const union = arr1.concat(arr2);
console.log(union, "UNION");

//DIFFERENCE: RETURN ITEMS THAT EXISTS IN FIRST ARRAY, BUT NOT IN THE SECOND
const difference = arr1.filter(x => !arr2.includes(x));
console.log(difference, "DIFFERENCE");

//SYMMETRIC DIFFERENCE: RETURNS ITEMS THAT DON'T REPEAT IN BOTH ARRAYS
const symmetricDiff = arr1
  .filter(x => !arr2.includes(x))
  .concat(arr2.filter(x => !arr1.includes(x)));
console.log(symmetricDiff, "SYMMETRIC DIFFERENCE")
