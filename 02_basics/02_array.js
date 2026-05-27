const mar_hero = ["thor" , "ironman" , "spiderman"]

const dc_hero = ["superman" , "flash" , "batman"]

// console.log(mar_hero.push(dc_hero)); // returnns no. of elements 

// //mar_hero.push(dc_hero)
//console.log(Array.isArray("Jonty"));
// console.log(mar_hero);


// const all_hero = mar_hero.concat(dc_hero)
// console.log(all_hero);


const all_newheros = [...mar_hero, ...dc_hero] // another method called spread to add 2 arrays

//console.log(all_newheros);

const nums = [1,2,3,[4,5],7,[10,20,[30]]]

const numss = nums.flat(Infinity)

//console.log(numss);

console.log(Array.from("Jonty"));


//console.log(Array.form({name : "Harsh"})); //interesting 

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1 , score2 , score3));

