let entries = [1, 2, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8];
console.log(entries, "Before")
let result = [...new Set(entries)]
console.log(result, "After")
