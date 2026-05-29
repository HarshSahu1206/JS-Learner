// Speial loops for Arrays or High Order Array Loop

// for of


const arr =[1,2,3,4,5,6]

for( const num of arr){
   // console.log(num);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Sates OF America")
map.set('FR',"France")
map.set('IN',"India")

console.log(map);

for (const [key , value] of map){
   // console.log(key ," :-", value);
}

const newObj = {
    'name1' : "harsh",
    'name2' : "Jonty"
}

for(const [key ,value] of newObj){ // Only maps are itteratable like this and not object
    console.log(key ," :- ", value );
    
}