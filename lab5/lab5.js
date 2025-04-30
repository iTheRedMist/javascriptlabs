//zavd 1
/*
let i = 0
for(i = 0; i <=21; i++){
    if((i%2) == 0 )
        console.log(i)
}
*/
//zavd2
/*
let n = 7
while(n < 21){
    console.log(n)
    n+=3
}
*/
//zavd3
/*
let number;
do {
    number = prompt("Введіть позитивне число:");
} while (number <= 0);

alert("Нарешті ви ввели позитивне число");
*/
//zavd4
/*
let human = { name: "Ілля", age: 18, city: "Кривий Ріг"}
for(let key in human){
    console.log(key, human[key])
}
*/
//zavd5
/*
let arr = [1,2,3,4,5]
for(let value of arr.reverse()){
    console.log(value)
}
*/
//zavd6
/*
let arr = [5, 21, 35, 7, 9, 2]
console.log("Елементи масиву: ")
arr.forEach((num) => {
    console.log(num)
})

let b = arr.map((num) => num ** 2)
console.log("Квадрат чисел масиву: ", b)

let c = arr.filter((num) => num > 10)
console.log("Числа більше 10 у  масиві: ", c)
*/