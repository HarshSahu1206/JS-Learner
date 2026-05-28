// Control Flow

//if
if (2 == "2"){ // <, >, <=, >=, !=, ==, ===, !==
    //console.log("Yes");
    
}

if (2 === "2"){ 
    //console.log("Yes");    
}

const score = 200

if (score > 100){
    const power  = "fly"
    //console.log(`Your Power is ${power}`);
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = !true


if(userLoggedIn && debitCard){
    //console.log("Allowed to buy course");   
}

if(loggedInFromEmail ||loggedInFromGoogle) {
    console.log("User logged in successfully.");
    
}