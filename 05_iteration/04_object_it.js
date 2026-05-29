// Now we will solve object problem getting with for of loop iteration
// For in loops 

const  newObject={
    JS : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for( const key in newObject){

    //console.log(`${key} :- ${newObject[key]}`);
}

const arr =[10,20,30,40,50,60]

for( const num in arr){  // for in loop in array returns keys
 //   console.log(num);
   // console.log(`${arr[num]}`);
    
    
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Sates OF America")
map.set('FR',"France")
map.set('IN',"India")

for(const key in map){
    console.log(key); // no output
    
}