let entries = [1, 2, 3, 4, 5, 6, 7]

console.log(entries.length, "Length original")
console.log(entries, "Array before resize")

entries.length = 4
console.log(entries.length, "Length after resize")
console.log(entries, "Array after resize")

entries.length = 0
console.log(entries.length, "Length after empty")
console.log(entries, "Array after empty")
