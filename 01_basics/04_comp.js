//console.log(2 > 7) F

//console.log("2 "> 7) F

//console.log("8"> 7) T

//console.log(null > 0)
// console.log( null == 0)
// console.log( null >= 0) // null changes to 0 and then comapres

// === strict check checks datatype also

// Stack (Primitive DT goes in Stack) , Heap (Non-Primitive)

let name = "Jonty"

let anotherName = name
anotherName = "Harsh"

// console.log(anotherName)
// console.log(name);


let userOne = {
    email:"Jonty@google.com",
    passwowrd :"jj"
}

let userTwo = userOne
userTwo.email = "Jonty@tr.com" // This changes email in userOne also

console.log(userTwo);
console.log(userOne);
