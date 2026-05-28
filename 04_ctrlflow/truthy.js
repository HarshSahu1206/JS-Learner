const userEmail = "jonty@ai"

if (userEmail){  // Here without any comp we ran if codn and it worked 
    //console.log("Got user Email");   // This is bcoz of truthy and falsy values 
} else {
    //console.log("No user email found");  
}

// Falsy Values 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan 

// Truthy Value
// "0", " ", 'false', [], {}, function(){}

const arr = []

if(!arr){
    //console.log("Array is empty.");    
} else {
    //console.log("Array is not empty."); // We get this output now bcoz [] is a truthy value so to check if array is empty or not we can do following   
}

if(arr.length === 0){
   // console.log("Array is Empty");   
} else {
    //console.log("Array is not empty.");
}

const emptyobj = {}

if (Object.keys(emptyobj).length ===0){
    //console.log("Object is Empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1

val1 = 5 ?? 10
val1 = null ?? 10

//console.log(val1);

// Terniary Operator

// condition ? true : false

const price = 100

price < 80 ? console.log("Price more than 80.") : console.log("Price less than 80.");

