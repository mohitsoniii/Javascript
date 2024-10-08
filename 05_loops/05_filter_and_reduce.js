const nums = [1,2,3,4,5,6,7,8,9,10]

// const values = nums.filter( (num) => num > 5)
// console.log(values);

// const values = nums.filter( (num) => {
//     return num > 5
// })
// console.log(values);

const Books = [
    { title : "book One" , genre:"Fictional", publish : 2009, edition : 2014 },
    { title : "book Two" , genre:"Non-Fictional", publish : 1989, edition : 2000 },
    { title : "book Three" , genre:"Comic", publish : 2001, edition : 2021 },
    { title : "book Four" , genre:"Fictional", publish : 2002, edition : 2024 },
    { title : "book Five" , genre:"Comic", publish : 1969, edition : 2024 },
    { title : "book Six" , genre:"Motivational", publish : 2016, edition : 2018 },
    { title : "book Seven" , genre:"History", publish : 1999, edition : 2012 },
    { title : "book Eight" , genre:"Non-Fictional", publish : 2021, edition : 2025 },
    { title : "book Nine" , genre:"Non-Fictional", publish : 2009, edition : 2009 },
    { title : "book Ten" , genre:"Fictional", publish : 2012, edition : 2014 },
]

let userBooks = Books.filter( (bk) => bk.genre === 'Comic' )

userBooks = Books.filter( (bk) => {return bk.publish > 2012} )

userBooks = Books.filter( (bk) => {
    return bk.publish > 2000 && bk.genre === 'Fictional'
} )
// console.log(userBooks);


//  --------------------- map() ---------------------------

// map works like forEach, but it also returns the values.

const numbers = [1,2,3,4,5,6,7,8,9,10]

const val = numbers.map( (num) => {
    return num + 10;
})

// console.log(val);  // output : [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]



//  ----------------------------- CHAINING   ----------------------------

let ans = numbers.
                map( (num) => num * 10).
                map((num)=> num + 2)
// console.log(ans);

ans = numbers
    .map( (num) => num * 10)
    .map((num)=> num + 2)
    .filter( (num) => num > 40)

// console.log(ans);

// so we can add multiple methods while performing some operation




// ----------------------- reduce() ------------------

const Nums = [1,2,3,4]

let total = Nums.reduce( (acc,curr)=> {
    // console.log(`Accumulator : ${acc}, Current value : ${curr}, total:${acc + curr}`);
    return acc + curr
},0)
// console.log(total);

total = Nums.reduce( (acc,curr)=> acc+curr, 5)
// console.log(total);


const myCart = [
    { itemName : 'Soap', price: 40},
    { itemName : 'mob', price: 400},
    { itemName : 'cleaner', price: 499},
    { itemName : 'gloves', price: 99},
    { itemName : 'Bucket', price: 150},
]
const tax = 49.99
const myTotal = myCart.reduce( (acc,curr) => {
    console.log(`Item : ${curr.itemName}, Item Price: ${curr.price}`);
    return acc + curr.price
}, tax);

console.log(myTotal);