
function syaMyName(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
};

// syaMyName()

function add2Numbers(num1,num2){
    result = num1 + num2
    return result
}

result1 = add2Numbers(4,5)
// console.log(result1);

result2 = add2Numbers(4,"A");
// console.log(result2);

result3 = add2Numbers(4,null)
// console.log(result3);

result4 = add2Numbers()
// console.log(result4);


function loginUserMessage(username){
    if(!username){
        console.log(`please enter a username.`);
        return 
    }
    return `${username} just logged in !!`
}

// console.log(loginUserMessage());  // won't give any error but will give undefined.

// console.log(loginUserMessage(' ')); // will consider it as a empty string.

// console.log(loginUserMessage('Mohit'));





//  ************ Function with default values 


function loginUserMessage2(username = 'Mohan'){
    if(!username){
        console.log(`please enter a username.`);
        return 
    }
    return `${username} just logged in !!`
}

// console.log(loginUserMessage2());  // won't give any error but will give aoutput with given default value

// console.log(loginUserMessage2('')); // will consider it as a empty string and ask to enter any argument

// console.log(loginUserMessage2('Mohit'));