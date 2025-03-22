//         STACK  &   HEAP 



//                         Stack Memory ( Primitive)

let myChannel = "muscleup_mohitt"

let anotherName = myChannel
anotherName = "stopped_being_mohit"

console.log(myChannel);    // output : muscleup_mohitt
console.log(anotherName);  // output : stopped_being_mohit


/**
 * In Stack Memory when we pass a variable A into an another variable B , then actually a copy of variable A is made and then it's value 
 * is passed into B, so when we try to update the variable B then the value of A does not gets updated because the value of the copy of A is
 * passed into B inspite of refrance, so the original Value of A is Unaffected. 
 */




//                        Heap Memory (Non-Primitive)

let studOne = {
    email : "user@gmail.com",
    roll : 101 
}

let studTwo = studOne

studTwo.email = "mohit@gmail.com"

console.log(studOne.email);   // output : mohit@gmail.com
console.log(studTwo.email);   // output : mohit@gmail.com

/**
 * In Heap Memory when a Variable A is passed in variable B , then actaually it's refrance is passed into the another variable i.e variable B,
 * and when we try to manipulate the variable B the it is updated in the memory where th refrance is and also the value at that refrance is also 
 * gets updated, and then the value of variable A is also gets Upadtaed.
 */