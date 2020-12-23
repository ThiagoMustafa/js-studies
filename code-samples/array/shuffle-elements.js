let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr, "Before")

function shuffle(){
  return Math.random() - 0.5
}

let result = arr.sort(shuffle)

console.log(result, "After")
