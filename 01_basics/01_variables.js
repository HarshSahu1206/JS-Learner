const accountId = 45158
let accountName = "Jonty"
var accountType = "Savings"
accountAmount = 150000

console.log("Account Id: " + accountId)

console.table([accountId , accountName , accountType , accountAmount])

//accountId = 45158
accountName = "Jonty Sir"
accountType = "Current"
accountAmount = 152450

console.table([accountId , accountName , accountType , accountAmount])

/* Prefer not to use var 
because of issue with block scope and functional scope.
*/