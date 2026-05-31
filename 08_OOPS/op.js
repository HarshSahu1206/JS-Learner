const user = {  // Object literal

    username : "Harsh",
    loginCount : 15,
    signedIn : true,

    getUserDetails : function (){
        console.log("Got user form DB. ");
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Harsh", 42, true)
const userTwo = new User("Jonty", -4, false) // without  use of new userTwo overrides unser one details 


console.log(userOne);
