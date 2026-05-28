// Immediately Invoked Function Expression (IIFE)


(function game (){
    console.log(`DB Connected`);   
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("Harsh")