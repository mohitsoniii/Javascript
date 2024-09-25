// >>>>>>>>>>>>>>>>>      if Statements     <<<<<<<<<<<<<<<<<<<<

if (true) {
    
}

const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log('User is logged in :)');
// }

//  <, >, <=, >=, ==, !=, ===, !==

// if (3 == '3') {
//     console.log('Executed with different datatype.');
// }

// if (3 === '3') {
//     console.log('Executed with different datatype.');
// }

// if ('3' === '3') {
//     console.log('Executed with same datatype.');
// }

//  implicit - usually not practised

const balance = 100
// if (balance > 50) console.log('yes'), console.log('yes2');



// >>>>>>>>>>>>>>>> else if , else  <<<<<<<<<<<<<<

const Balance = 1000

// if (Balance < 500) {
//     console.log(" balance less the 500");
// }else if (Balance < 750) {
//     console.log(" balance less the 750");
// }else if (Balance < 900) {
//     console.log(" balance less the 900");
// }else{
//     console.log(" balance greater the 900");
// }



const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitcard && 2 != 3) {
//     console.log("Allowed to buy course.");
// }

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged in.");
}