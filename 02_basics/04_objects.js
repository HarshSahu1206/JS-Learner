const instaUser = new Object ()

instaUser.id = "1001"
instaUser.name = "Sam"
instaUser.email = "Sam@gamil.com"

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

//const obj3 = { obj1 , obj2 }
// console.log(obj3);

//const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

