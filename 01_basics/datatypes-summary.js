// Primitive 

// 7 types: string, number, bigint, boolean, undefined, symbol, null

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // false because symbol is unique

// Non-primitive

// object, array, function

const heros = ["shaktiman", "naagraj", "doga"]
let object = {
    name: "gourav",
    age: 23,
    isloggedin: false,
}

const myfunction = function () {
    console.log("hello world")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3