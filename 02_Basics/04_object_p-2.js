// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "001abc"
tinderUser.email = "01user@gmail.com"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regulerUser = {
    email : "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Mohit",
            lastName: "Soni"
        }
    }
}

// console.log(regulerUser.fullname.userFullName.firstName);
// console.log(regulerUser.fullname.userFullName.lastName);


//********* Adding of Object ******* //

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const newObj = {obj1, obj2}    // wrong way

// const newObj = Object.assign({},obj1,obj2,obj3)   // right way but not oftenly used.

const newObj = {...obj1, ...obj2, ...obj3}  // (Spread operator), more commonly used.
// console.log(newObj);



const users = [
    {
        id: 1,
        email: "01@g.com"
    },
    {
        id: 2,
        email: "02@g.com"
    },
    {
        id: 3,
        email: "03@g.com"
    }
]

// console.log(users);

// console.log(Object.keys(tinderUser));     // will give keys of an object in an array.
// console.log(Object.values(tinderUser));   // will give values of an object in an array.
// console.log(Object.entries(tinderUser));  // will give pair of keys and values of an object in an array.


// console.log(tinderUser.hasOwnProperty("isLoggedIn"))  //will give true
// console.log(tinderUser.hasOwnProperty("isLogged"))  //will give false