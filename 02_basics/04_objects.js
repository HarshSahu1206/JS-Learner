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

// console.log(Object.keys(instaUser));

// console.log(Object.values(instaUser));

// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('email'));


const course = {
    coursename : "JS",
    price : "999",
    courseInst : "Hitesh"
}

const {courseInst : inst} =  course // Destructure easy to use instead of course.courseInst

console.log(inst);
