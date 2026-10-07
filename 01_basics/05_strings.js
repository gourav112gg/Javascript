// const name = "gourav"
// const repocount = 30

// // console.log(name + repocount + "value")

// console.log(`Hello ${name}, your repo count is ${repocount}`)

const game = new String("gourav-garg-he-cewio-cawe") 

// console.log(game)
// console.log(game[0])
// console.log(game.__proto__) // String.prototype

// console.log(game.charAt(0))
// console.log(game.indexOf("v"))

// const Newstring = game.substring(0,4) // only supports positive indexing
// console.log(Newstring)

// const anotherstring = game.slice(-8, 4) // supports negative indexing
// console.log(anotherstring)

const newstringone = "   Hello World    "
console.log(newstringone)
console.log(newstringone.trim()) // removes the white spaces from both sides

const url = "https://gourav.com/garg%20github"
console.log(url.replace('%20', '-')) // replaces the first occurrence of the string    
console.log(url.includes('gourav')) // returns true if the string is present in the url

console.log(game.split("-")) // splits the string into an array based on the separator