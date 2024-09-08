//        Arrays       //

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3]);

const arrHeros = new Array("Ironman", "CapAmerica", "Hulk", "Thor", "Spiderman")
// console.log(arrHeros);
// console.log(arrHeros[2]);



// *************    Array Methods    **************  //

arrHeros.push("Ant-Man")
arrHeros.push("Dr-Strange")
arrHeros.pop()

// console.log(arrHeros);

arrHeros.unshift("Mohit")    // inserts element at initial position. (at 0th index)
// console.log(arrHeros);

arrHeros.shift()             // deletes element from the starting position (0th index)
// console.log(arrHeros);



// console.log(arrHeros.includes("Ironman"));
// console.log(arrHeros.includes("Mohit"));

// console.log(arrHeros.indexOf('Thor'));
// console.log(arrHeros.indexOf("Mohit"));


const newArr = arrHeros.join()      // converts a array into a string.

// console.log(arrHeros);
// console.log(typeof arrHeros);
// console.log(" ");
// console.log(newArr);
// console.log(typeof newArr);


//  ********   Slice and Splice  *********//

console.log("Original", arrHeros);
console.log("");

const sliceHeros = arrHeros.slice(2,5)     // Last element is Exclusive and orginal matter doesn't changes. 
console.log("Sliced-Array", sliceHeros);
console.log("Original", arrHeros);
console.log(" ");
const spliceHeros = arrHeros.splice(2,5)   // Last element is Inclusive and original matter changes.
console.log("Spliced-Array", spliceHeros);
console.log("Original", arrHeros);