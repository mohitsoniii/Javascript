/////     IIFE = Imediately Invoked Function Expression

// Is used for avoiding pollution from Global Scope
// and for imediately execution.

// function DB(){
//     console.log('Database Connected :)');
// }
// DB();


// using IIFE:
(function DB(){  // named iife
    console.log('Database Connected :)');
})();

//          ()() ----->  IIFE

( () => {   // unnamed iife
    console.log("Database Connected Again :))");
})();

( (name) => {   // unnamed iife
    console.log(`${name}, hello Database is already connected.`);
})('Mohit')