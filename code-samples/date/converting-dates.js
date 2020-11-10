const options = {year: "numeric", month: "long", day: "numeric"}
const date = new Date(2020, 09, 10)
console.log(date) //2020-10-10T03:00:00.000Z
console.log(date.toLocaleDateString("pt-BR", options)) //10 de outubro de 2020
console.log(date.toLocaleDateString("pt-BR", {...options, month: "numeric"})) //10/10/2020
