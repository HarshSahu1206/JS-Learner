const name = "Harsh"
const repoCount = 5

//console.log(name +repoCount + " Values") // old way

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Spencer')

console.log(gameName);

// console.log(gameName[1]);

// console.log(gameName.length);

// console.log(gameName.toLocaleUpperCase());

// console.log(gameName.charAt(5));

// console.log(gameName.indexOf("r"));

const newStr = gameName.substring(0,4)

//console.log(newStr);


const newStr2 = gameName.slice(-5,2)

//console.log(newStr2);


const newStr3 = "   Harsh  "

// console.log(newStr3);

// console.log(newStr3.trim());


const url = "https://harsh.com/harsh%20sahu%20money=500"

console.log(url.replaceAll('%20' , '-'))

//console.log(url.includes('sahuu'))

console.log(url.split('%20'))