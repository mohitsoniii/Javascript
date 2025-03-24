// ********** *********** // 

// singleton
// object.create   // constructor method     // singleton
//       or
// const myObj = new Object();              // singleton


// ************       Object creation by Literals method     ********** //

// const mySym = Symbol("Zodiac")

// const myInfo = {
//     name: "Mohit",
//     [mySym] : "Leo",
//     "Full Name" : "Mohit Soni",
//     age: 23,
//     location: "Jaipur",
//     email: "mohit@google.com",
//     isLoggedIn : true,
//     lastLoginDays : ["Saturday", "Sunday"]
// }
// // console.log(myInfo);

// console.log(myInfo.email);
// console.log(myInfo.lastLoginDays);
// // console.log(myInfo. Full Name);  // will give error
// console.log(myInfo.mySym);      // will give error

// console.log(myInfo["email"]);
// console.log(myInfo["lastLoginDays"]);
// console.log(myInfo["Full Name"]);
// console.log(myInfo[mySym]);


// Updating objects //

// myInfo.email = "mohit@yt.com"
// console.log(myInfo["email"]);

// Object.freeze(myInfo)

// myInfo.email = "mohit@microsoft.com"
// console.log(myInfo["email"]);

// console.log(myInfo);



// creating function in an Object

// myInfo.greeting = function(){
//     console.log("Hello JS User!!");
// }
// // console.log(myInfo.greeting());


// myInfo.greetingTwo = function(){
//     console.log(`Hello JS User!!, ${this.name}`);
// }
// console.log(myInfo.greetingTwo());

// console.log(myInfo);