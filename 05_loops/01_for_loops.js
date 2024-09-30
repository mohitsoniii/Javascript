

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);  
}  // will print numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is the best number`);
    }
    // console.log(element);
}


//  >>>>>>>>>> Loopss in Arrays  <<<<<<<<<<<<<

myArray = [2,4,6,2,9,0,5,43]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}  //  will print all elements of array


// >>>>>>>>>>>>>>   Nested Loops   <<<<<<<<<<<<<< 

// print table of numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    // console.log("\n");
    // console.log(`Table of : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
        
    }
} // will print the table


//  >>>>>>>>>>>>>>>>>>>>>   for strings   <<<<<<<<<

Str = 'ABCDEFGH'

for (let char = 0; char < Str.length; char++) {
    const element = Str[char];
    // console.log(element);
}


obj = {
    name :"Mohit",
    Age : 23,
    Gender : "Male",
    Email: "mohit@gmail.com"
}

for (let i = 0; i < obj.length; i++) {
    const element = obj.i;
    console.log(element);
}
// console.log(obj.length);



//  >>>>>>>>>>>>>>   Break And Continue   <<<<<<<<<<<<<

// break

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`Detected number 5 :) `);
        break                 // will break when 5 is occured.
    }
    console.log(`The value of i is ${element}`);
}


// Continue
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`Detected 5 :) `);
        continue              // will skip when 5 is occured.
    }
    console.log(`The value of i is ${element}`);
}