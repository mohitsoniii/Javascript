
// if (true) {
//     let a = 5
//     const b = 10
//     var c = 15
// }


// // console.log(a); // will give -> ReferenceError: a is not defined  , due to Block Scope.
// // console.log(b);  // will give -> ReferenceError: b is not defined  , due to Block Scope.
// console.log(c); // will run successfully due to Global Scope.


var c = 300;
let a = 100;

if (true) {
        let a = 5
        const b = 10
        var c = 15

        // console.log("INNER a: ",a);  // output -> INNER:  5
    }

// console.log("OUTER a: ",a); //output -> OUTER:  100
// // console.log(b);
// console.log(c);



function one(){
    const username = 'Mohit'

    function two(){
        const website = ' leetcode'
        console.log(username+website);
    }
    // console.log(website);   // error will occure because website is out of scope.

    two()
}
// one()



if (true) {
    const username = 'Mohit '

    if (username === 'Mohit ') {
        const website = 'GeeksforGeeks'
        // console.log(username + website);
    }
    // console.log(username + website);   // error will occure because website is out of scope.
}
// console.log(username);  // error will occure because website is out of scope.




// +++++++++++++++++++++++++  intresting +++++++++++++++++++

console.log(addOne(6))  // will run successfully
function addOne(num){
    return `${num + 1}, Thala for a reason.`
}
console.log(addOne(6))  // will run successfully


// console.log(addTwo(16))    // will give error because of concept of Hoeisting (Cannot access 'addTwo' before initialization)
const addTwo = function(num){
    return `${num+2}, King is Kohli`
}
console.log(addTwo(16))  // will run successfully
