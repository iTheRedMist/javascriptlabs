const arr = [14, 5, 23, 65, 43, 4, 80, 52, 53]
const max = arr.reduce((x,y) => x > y ? x : y)
console.log(`Максимальне значення: ${max}`)