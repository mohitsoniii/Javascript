//  merging of arrays


const marvel_Heros = ["Ironmaan", "Cap-Amerika", "Thor", "Hulk" ]
const dc_Heros = ["Batman", "Superman", "Shazam" ]


// ************* By Push ********** //

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);   // simply pushing a array in another array will create a multi dimensional array.
// console.log(marvel_Heros[4][1]);        




// ************* By Concat ********** //

// const all_heros = marvel_Heros.concat(dc_Heros)    // this will concatenate the two arrays but will create an another array to do this, not in the existing one and can only concatenate 2 arrays.
// console.log(all_heros);




// ************* By Spread ********** //   (does the same work as concat but can add 2 or more arrays)

// const all_Heros_New = [...marvel_Heros, ...dc_Heros]
// console.log(all_Heros_New);

// const ages = [18,20,22,26]

// const all_Heros_new = [...marvel_Heros, ...dc_Heros, ...ages]
// console.log(all_Heros_new); 



//  handeling of multi-dimensional 

// const myArr = [1,2,3, [4,5,6], [7,[ 9,10,11,12 ],8,15] ]

// const newArr = myArr.flat(1)   // this method seperates all the elelments into a single unit , we have to enter a depth till which we want to flatten.
// console.log(newArr);



// console.log(Array.isArray("Mohit"));    // check if it is a array.
// console.log(Array.from("Mohit"));       // converts a the given string or object into an array.
// console.log(Array.from({name:"Mohit"}));  // converts a the given string or object into an array.

// myObj = {
//     name:'Mohit',
//     age: 24,
//     city: 'Jaipur'
// }
// console.log(Array.from(Object.values(myObj)));  // converts a the given string or object into an array.



// score1 = 89
// score2 = 15
// score3 = 2

// console.log(Array.of(score1, score2, score3));   // returns a new array of multiple elements.