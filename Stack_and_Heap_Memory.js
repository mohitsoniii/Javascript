//                    STACK       &      HEAP 



//                         Stack Memory ( Primitive)

let myChannel = "muscleup_mohitt"

let anotherName = myChannel
anotherName = "stopped_being_mohit"

console.log(myChannel);    // output : muscleup_mohitt
console.log(anotherName);  // output : stopped_being_mohit


/**
 * In Stack Memory when we pass a variable A into an another variable B , then actually a copy of variable A is made and then it's value 
 * is passed into B, so when we try to update the variable B then the value of A is not gets updated because the value of the copy of A is
 * passed into B inspite of refrance, so the original Value of A is Unaffected. 
 */