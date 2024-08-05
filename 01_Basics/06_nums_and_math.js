const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const num = 123.8555
const num2 = 22.8555

// console.log(num.toPrecision(2));
// console.log(num2.toPrecision(1));
// console.log(num2.toPrecision(2));
// console.log(num2.toPrecision(3));
// console.log(num2.toPrecision(4));

const hundreads = 10000000
// console.log(hundreads.toLocaleString('en-IN'));

Number
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.EPSILON);



// +++++++++++++++++++++++++   Maths   +++++++++++++++++++++++ //

console.log(Math);

// console.log(Math.abs(-5));
// console.log(Math.abs(5));

// console.log(Math.round(5.49));
// console.log(Math.round(5.8));
// console.log(Math.ceil(7.1));
// console.log(Math.floor(7.9));


// console.log(Math.min(4,6,52,78,62));
// console.log(Math.max(4,6,52,78,62));


console.log(Math.random());

console.log(Math.random()*10);
console.log(((Math.random())*10) + 1);    // Minimum value for this line will be 1.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // it will always give the value between Max and Min.