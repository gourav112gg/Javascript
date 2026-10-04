"use strict"; // Enable strict mode. treat all JS code as newer version.

// alert("hello") // we are using nodejs not browser so alert will not work

console.log(3+3); 

let name = "gourav" // string
let age = 23 // number
let isloggedin = true // boolean



// number => 2^53 - 1 (bigint is also available in js to store larger numbers)
// string => ""
// boolean => true or false
// null => standalone value
// undefined => empty value - default value of variable which is not initialized
// symbol => unique value which is used to create unique identifiers for objects
// object => collection of key value pairs

console.log(typeof "gourav");
console.log(typeof age);
console.log(typeof null); // object
console.log(typeof undefined); // undefined is a type of undefined