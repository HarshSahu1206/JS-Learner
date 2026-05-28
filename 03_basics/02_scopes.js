// let a = 10  // block scoped
// const b = 20  // block scoped
// var c =30  // global scoped

// console.log(a);
// console.log(b);
// console.log(c);


//{}  any code inside this is block scope 

if(true){
    let a = 10  
    const b = 20  
    var c = 230
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //website is only accessible inside func two()

     two()

}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

console.log(addone(5))

function addone(num){ // If we make function like this we can call it before
    return num + 1
}



//addTwo(5)
const addTwo = function(num){ // but like this we can't call before initilization
    return num + 2
}
