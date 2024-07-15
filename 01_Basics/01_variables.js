const accountId = 169
let accountEmail = "mohit@gmail.com"
var accountPassword = "121212"
accountCity = "Jaipur"

let accountState ;
// accountId = 179  // not allowed

accountEmail = "mohit18@gmail.com"
accountPassword = "131313"
accountCity = "Delhi"

/*
prefer not to use "var"
because of block scope and functional scope
*/

// console.log(accountId); 

console.table([accountId, accountEmail, accountPassword,accountState, accountCity]);
