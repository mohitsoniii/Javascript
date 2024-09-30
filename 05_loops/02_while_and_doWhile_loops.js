

//  >>>>>>>>>>>>>>>>>>>> while loops  <<<<<<<<<<<<<<<<<<<<

let i = 0
while (i <= 10) {
    // console.log(i);
    i = i + 2
} // will print even numbers from 0 to 10

myArray = ['Ironman', 'Cap-Amerika', 'Thor', 'Hulk']

let j = 0
while (j < myArray.length) {
    // console.log(myArray[j]);
    j++
}  // will print each element of array



// >>>>>>>>>>>>>>>>>>>>> Do While loops <<<<<<<<<<<<<<<<

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

console.log('---------------------');

score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);   // in this condition only 11 will print.