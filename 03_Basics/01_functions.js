
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










//  ***************** FUNCTIONS WITH OBJECTS AND ARRAYS ****************** //







function clacCartPrice(num1){
    return num1
}
// console.log(clacCartPrice(2))   // output : 2


function clacCartPrice1(...num1){     // (...) --> is known as Rest operator, it actually clubs the multiple values into one unit.
    return num1
}
// console.log(clacCartPrice1(200,400,100,500))    // output :  [ 200, 400, 100, 500 ]


function clacCartPrice2(val1, val2, ...num1){     // (...) --> is known as Rest operator, it actually clubs the multiple values into one unit.
    return num1
}
// console.log(clacCartPrice2(200,400,100,500))   // output : [ 100, 500 ]   , here val1, val2 will be assigned as 200 and 400 respectivly and the rest will be clubbed by Rest op.



// *****************    OBJECTS 

const user = {
    Username : 'Mohit',
    Age : 23
}

function showData(anyObject){
    console.log(`The user's name is ${anyObject.Username} and the user's age is ${anyObject.Age}`);
}
showData(user); //will run successfully, but we can also make it like given below.
showData({
    Username : 'Mohit',
    Age : 23
});





//  *****************  ARRAYS 

const itemPrices = [100,200,300,400,500]

function showItemData(anyArray){
    console.log(anyArray[2]);
}
showItemData(itemPrices);//will run successfully, but we can also make it like given below.
showItemData([100,200,300,400,500]);