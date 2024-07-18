// Two types of DATATYPES :

// 1.) Primitive (call by value):

//  7 types : String, Number, Boolean, null, Undefined, Symbol, Bigint


const marks = 98
const marksValue = 98.99

const isLoggedIn = true
const outSideTemp = null
let userEmail;
const bigNumber = 956458956n

const id_1 = Symbol('123')
const id_2 = Symbol('123')

console.log(id_1 === id_2);

console.table([typeof marks, typeof marksValue, typeof isLoggedIn, typeof outSideTemp, typeof userEmail, typeof bigNumber, typeof id_1, typeof id_2])



//  2.) Non- Primitive (call by reference)

//  :-> Array, Objects, Function


const Heros = ["Ironman", "Hulk", "Thor", "CapAmerika"]

let myObj = {
    Name : "Mohit",
    Age : 23
}

const myFunction = function(){
    conole.log("Hello, Mohit")
}

console.table([typeof Heros, typeof myObj, typeof myFunction])