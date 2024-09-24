// >>>>>>>>>>>>>    This    <<<<<<<<<<<<<<<<<<<


const user = {
    username : 'Mohit',
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);   // will print the whole context of the object
    }
}

// user.welcomeMessage();
// user.username = 'Mahi'
// user.welcomeMessage()


// >>>>>>>>>>>>>  IMPORTANT   <<<<<<<<<<<
// console.log(this);   // will print an empty object {}, because in Node Environment there is nothing in global object.

// const id = 'id-001'
// function chai(){
//     let username = 'Mohit'
//     // console.log(this);
//     // console.log(this.id);     // will give "Undefined" because we can not access, with this in Functions.
//     // console.log(this.username);   // will give "Undefined" because we can not access, with this in Functions.
// }
// chai()

// const id = '002'
// const chai = function(){
//     const username = 'Mohit'
//     // console.log(this);
//     // console.log(this.id);          // same is with this type of Function.
//     // console.log(this.username);    // same is with this type of Function.
// }
// chai()




// >>>>>>>>>>>>>>>>>>>    ARROW Function   <<<<<<<<<<<<<<<<<<

// const id = '003' 
// const chai = () => {      // arrow function
//     const username = 'Mohit'
//     console.log(this);             // this will print an empty object , unlike those two above functions
//     console.log(this.id);         // same is with this type of Function.
//     console.log(this.username);  // same is with this type of Function.
// }
// chai()




 

// >>>>>>>  Basic Arrow Function

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3,4));   // will output 7



// >>>>>>>  Implicit Arrow Function


// const add3 = (num) => `${num + 3}, Thala for a Reason.`
// console.log(add3(4));    // will run successfully



// const add3 = (num) => (`${num + 3}, Thala for a Reason.`)
// console.log(add3(4));     // will give same output as above.


// with objects

// const show = () => {username:'Mohit'}
// console.log(show());  //will give undefined

const show = () => ({username:'Mohit'})
console.log(show());   // will run successfully