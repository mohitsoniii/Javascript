
let score1 = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null
let score5 = undefined
let score6 = true
let score7 = "SixtyNine"

console.log(typeof(score1));

console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));


let valueInNumber3 = Number(score3)
console.log(valueInNumber3, typeof(valueInNumber3));


console.log(score4, typeof(score4));
let valueInNumber4 = Number(score4)
console.log(valueInNumber4, typeof(valueInNumber4));


console.log(score5, typeof(score5));
let valueInNumber5 = Number(score5)
console.log(valueInNumber5, typeof(valueInNumber5));


console.log(score6, typeof(score6));
let valueInNumber6 = Number(score6)
console.log(valueInNumber6, typeof(valueInNumber6));


console.log(score7, typeof(score7));
let valueInNumber7 = Number(score7)
console.log(valueInNumber7, typeof(valueInNumber7));


// "33"  => 33
// "33abc" => NaN
// true  => 1   , false = > 0


let isLoggedIn = "mohit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true  ; 0 => false
// "" = > false  : "mohit" => true


let someNumber = 33

let strNumber = String(someNumber)
console.log(strNumber, typeof(strNumber));




// *********************************       OPERATIONS     ******************************  // 

let value = 5

let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " Mohit"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");



console.log(+true)
console.log(+"")

let num1, num2, num3 

num1 = num2 = num3 = 2+2

let gameCounter1 = 100
gameCounter1++
console.log(gameCounter1)

let gameCounter2 = 200
++gameCounter2
console.log(gameCounter2)