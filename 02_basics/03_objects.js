// Singleton

// Object lterals

const mySym = Symbol ("key")

const JsUser = {
    name : "Harsh",
    "Full name " : "Harsh Sahu",
    age : 21,
    [mySym] : "Password",
    location : "GWL",
    lastlogin : ["Monday" , "Wednesday"]
}

// console.log(JsUser.location);
// console.log(JsUser["age"]);

// console.log(JsUser["Full name "])
// console.log(JsUser[mySym]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "Jonty@google.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting2());
