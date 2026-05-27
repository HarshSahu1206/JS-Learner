// Array

const myArr = [10,20,30,40,50] 

const newArr2 = new Array(1,2,3,4,5)

// console.log(myArr);
// console.log(newArr2);
// console.log(myArr[2]);

// Array Methods 

myArr.push(60, 70)
myArr.pop(70)

myArr.unshift(0) // adds element at index 0
myArr.shift() // removes element at index 0


// console.log(myArr);
// console.log(myArr.includes(202));
// console.log(myArr.indexOf(50));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);


const myn2 = myArr.splice(1,3) // splice includes last range and also makes changes in original array
console.log("C ",myArr);

console.log(myn2);

