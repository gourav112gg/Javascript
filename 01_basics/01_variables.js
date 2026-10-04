const accountId = 123456789 // fixed value, cannot be changed
let email = "gourav123@gmail.com" // can be changed
var password = "gourav@123" // can be changed
accountcity = "Jaipur" // can be changed
let acccountstate;

/*
prefer not to use var
because of issue in block scope, it is function scoped
*/

// accountId = 12232 // not allowed because accountId is a constant

email = "garg132@gmail.com"
password = "gourav@1234"
accountcity = "delhi"

console.table([accountId, email, password, accountcity, acccountstate]);