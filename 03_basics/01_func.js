// Functions and Parameter

function sayMyName(){
    console.log("Harsh");
    console.log(" Sahu");
    
    
}

//sayMyName()

// function sum(number1 , number2){
//     console.log(number1 + number2);
    
// }
// sum(2,3)
// sum("4",2)
// sum(4 + "5")
// sum( "a" , 5)


function sum(number1 , number2){
    let res = number1 + number2
    return res
    
}

const result = sum (10,52)
//console.log("Result : ",result);

function login(username){
    if(username === undefined){
        console.log("Please enter Username.");
        return
        
    }
    return `${username} just logged in.`
}

//console.log(login());


//Shopping Cart 
// for multiple values we use rest operator
function calcCartPrice(...num1){
    return num1
}

//console.log(calcCartPrice(200,500,152,120));

const user = {
    username : "Harsh",
    price : "125"
}

function handelObject(anyObject){
    console.log(`Hello your user name is ${anyObject.username} and total price will be ${anyObject.price}`);
    
}

//handelObject(user)

handelObject({
    username : "Harsh",
    price : 125
})

const arr = [100,200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(arr));
console.log(returnSecondValue([100,200,300,400,500]));
