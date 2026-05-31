const promise1 = new Promise(function (resolve, rejcet) {
    //Do a async task .. db calls , cryptography
    setTimeout(function () {
        console.log("Async task is compllete. ");
        resolve()       
    },1000)
})

promise1.then(function () {
    console.log("Promise Consumed");
    
})


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


new Promise(function (resolve, reject) {
    setTimeout(function (){
        console.log("Async task 2 ");
        resolve()
    } , 1000)
}).then(function () {
    console.log("Async 2 resolved");
    
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const promise3 = new Promise( function(resolve, reject) {
    setTimeout(function() {
        resolve({username : "Jonty",
            email :"jonty@google.com"
        })
    },100)
})

promise3.then( function(user){
    console.log(user);
    
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const promise4 = new Promise (function (resolve, reject){
    setTimeout(function (){
        let error = true
        if (!error){
            resolve({
            username : "Jonty",
            password : "123"
        })
        }else{
            reject("ERROR: Something went wrong")
        }
        
    }, 1000)
})

promise4
.then( function (user){
    return user.username
})
.then(function (username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("Promise is either resolved or rejected. "))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promise5 = new Promise( function (resolve, reject ) {
    setTimeout(function (){
        let error = true
        if (!error){
            resolve({
            username : "JS",
            password : "123"
        })
        }else{
            reject("ERROR: JS went wrong")
        }
        
    }, 1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

