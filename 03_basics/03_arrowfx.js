const user = {
    username : "Harsh",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to our page. `);  
    }
}

// user.welcomeMessage()
// user.username = "Jonty Sir"
// user.welcomeMessage()

const game = ( ) => { // It's called arrow function
    console.log(this)
}

// game()

const add = (num1 , num2) => {
    return num1 + num2  // explicit return
}

// console.log(add(5,8));


const adds = (num1 , num2) => num1 + num2 // if only 1 like of code exist we can write like this also // implicit return

console.log(adds(5,8));
