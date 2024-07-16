"use strict"; // treat all JS code as newer version

// alert(3 + 3) // will give error because we are using NodeJS, not the Browser.

console.log(3 +
     3);                // code readabilty should be high

console.log("Mohit");

 /////////////////////////////////////////      DATATYPES IN JS          ////////////////////////////////////////

 let name = "Mohit"
 let age = 25
 let isLoggedIn = true
 let state;


//  number =>  2 to power 53
//  bigint
//  string => ""
//  boolean => true / false
//  null => standalone value
//  undefined => 
//  symbol  => unique


//  object

console.log(typeof(state));

console.table([typeof(5) , typeof("Mohit"), typeof(true), typeof(null) , typeof(undefined) ])

console.log(typeof(undefined))    //undefined
console.log(typeof(null));      // object type (mistake of JS)
