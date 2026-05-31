// Reduce

const myNums = [1,2,3]

// const ytotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
    
// },0)

const ytotal = myNums.reduce( (acc, cur) => acc + cur , 0)

//console.log(ytotal);


 const shoppingCart =[
    {
        itemName : "JS-Course",
        price : 2999
    },
    {
        itemName : "PY-Course",
        price : 999
    },
    {
        itemName : "Mobile Dev-Course",
        price : 5999
    },
    {
        itemName : "DS-Course",
        price : 1999
    }
 ]

 const total = shoppingCart.reduce( (acc, item ) => acc + item.price , 0)
 console.log(total)
 

