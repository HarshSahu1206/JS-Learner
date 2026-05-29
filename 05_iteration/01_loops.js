// For Loop

for(let index = 0; index < 10; index++){
    const element = index;
    //console.log(element);
    
}
//console.log(`Last element is ${element}`);


for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
       // console.log(`${i} * ${j} = ${i*j}`);
        
    }
  //  console.log(" ");
    
}

let arr = ["Flasg", "Batman", "Superman"]
//console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    
    const element = arr[i];
    //console.log(element);
}


// Break and Continue

for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value is ${i}`);
    
}
for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value is ${i}`);
    
}