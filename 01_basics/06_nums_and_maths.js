const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // returns the number with 2 decimal places

const num = 100.123456
console.log(num.toPrecision(4)) // returns the number with 4 significant digits

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN")) // returns the number in Indian format

// +++++++++++++++++++ MATHS +++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-5)); // returns the absolute value of the number
// console.log(Math.round(4.3)); // returns the nearest integer
// console.log(Math.ceil(4.3)); // returns the smallest integer greater than or equal to the number
// console.log(Math.floor(4.7)); // returns the largest integer less than or equal to the number

console.log(Math.random())  // returns between 0 and 1
console.log((Math.random() * 10) + 1) // returns between 0 and 10


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns between 10 and 20