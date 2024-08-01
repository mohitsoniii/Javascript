//          STRING            //

const name = "Mohit Soni"
const age = 24

// console.log(name + age + "down");     // outdated style
// console.log(typeof name);



// *******STRING INTERPOLATION************//


// console.log(`My name is ${name}. My string is ${age}`);  // (styring interpolation)


// another way of declaring the strings
const workoutName = new String("Bench-Press")

// console.log(workoutName[2]);
// console.log(workoutName.__proto__);
// console.log(workoutName.__proto__.length);
// console.log(workoutName.length);
// console.log(workoutName.charAt(6));
// console.log(workoutName.indexOf('P'));
// console.log(workoutName.toUpperCase());

// *********   SUBSTRING   **********//
// const newStr = workoutName.substring(0,4)
// console.log(newStr);


//***********   SLICE   ***********//
// const anotherStr = workoutName.slice(-4,-1)
// console.log(anotherStr);



//*********     TRIM     ***********//
// const str1 = "      mohit      "
// console.log(str1);
// console.log(str1.trim());



// ***********    REPLACE     **********//
// const url = "https://www.geeksforgeeks.org/user%50/mohitsoni18/"
// console.log(url.replace('%50', '#'))


//  *********      INCLUDES    ******* //
// const str2 = "Lat-Pull-Down"
// console.log(str2.includes('-'));


// *********     SPLIT      ********* //
// console.log(str2.split('-',2));

// *******     MATCH        *********//
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);