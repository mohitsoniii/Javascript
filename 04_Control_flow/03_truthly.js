// let userEmail = "mohit@gmail.com"

// if (userEmail) {
//     console.log("Got user Email");
// }else{
//     console.log("Don't have user email.");
// }

// userEmail = ""

// if (userEmail) {
//     console.log("Got user Email");
// }else{
//     console.log("Don't have user email.");
// }


//     >>>>>>>>>>>>>    Falsy values   <<<<<<<<<

//   false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// otherthen then these values all are Truthly values

//  truthly values eg:- 
//  "0", "false", " ", [], function(){} etc.



// check if an array is empty-

const myArray = []

if (myArray.length === 0) {
    console.log("Array is Empty");
}else{
    console.log("Array is not empty.");
}

// check if an object is empty-

const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}else{
    console.log("Object is not empty");
}



//   >>>>>>>>  Nullish Coalescing Operator (??) : null undefined        <<<<<<<<<<<<

let val;
// val = 5 ?? 10    // output - 5
// val = null ?? 10    // output - 10
val = undefined ?? 15    // output - 15


console.log(val);



// >>>>>>>>>>  Terniary Operator  

//  condition ? true : false

const chaiPrice = 22

chaiPrice <=20 ? console.log("I Can buy Chai") : console.log("I can't buy Chai."); 
