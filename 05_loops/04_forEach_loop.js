const heros = ['Ironman', 'Cap-Amerika', 'Thor', 'Hulk', 'Spiderman']

heros.forEach( function (item) {  // with normal callback function
    // console.log(item);
} )


heros.forEach( (item) => {     // with arrow callback function
    // console.log(item+' '+item);
} )

function printMe(item) {
    // console.log(item);
};

// heros.forEach(printMe);     // with pre-defined callback function


// forEach can access many other types of properties, such as -

heros.forEach( (item,index,arr) => {
    // console.log(item,index,arr); 
} )


// -----------------------------------------------------------------------
// ------------------- forEach in objects ------------------------

const employee = [
    {
        id : 10,
        empName : 'Mohit'
    },
    {
        id : 7,
        empName : 'Kavish'
    },
    {
        id : 19,
        empName : 'Bijuu'
    },
    {
        id : 9,
        empName : 'Lokesh'
    },
    {
        id : 58,
        empName : 'Vanshika'
    }
]

employee.forEach( (person) => {
    console.log(person.id +":"+person.empName);
})

