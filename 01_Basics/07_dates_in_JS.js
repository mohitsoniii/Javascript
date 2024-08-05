//  Dates

let myDate = new Date()
// console.log((typeof myDate));

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString('en-IN'));

// let myCreatedDate = new Date(2024,7,6, 1, 15, 25, 44)
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // default values in mili seconds
// console.log(Math.floor(Date.now()/100)); // changed into seconds


let newDate = new Date()
// console.log(newDate.toDateString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

des = `Today is ${newDate.toDateString()}, and the day is ${newDate.getDay()}`
// console.log(des);

newDate.toLocaleString('default', {
    weekday : "long",
    dateStyle : "full"  
})
console.log(newDate.toLocaleString);