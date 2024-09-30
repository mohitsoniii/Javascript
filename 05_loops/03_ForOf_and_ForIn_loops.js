// >>>>>>>>>>>>>>>>>>  For of   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ["", "", ""]     array of Strings

// [{}, {}, {}]     array of Objects

// in arrays

const myArr = [1,2,3,4,5]
for (const num of myArr) {
    // console.log(num);
}

// in strings

const greetings = "Hello Developer"
for (const greet of greetings) {
    // console.log(`Current character is ${greet}`);
}



// in Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States')
map.set('FR', 'France')
map.set('IN', 'India')  // Map does not add duplicate values

// console.log(map);

for (const [anything] of map) {
    // console.log(anything);
}

for (const [anything, something] of map) {    // actually 'anything' and 'something' are working as Keys and Values here.
    // console.log(`${anything} :- ${something}`);
}


// in objects

const myObj = {
    "Game1":"PUBG",
    "Game2":"GOW",
    "Game3":"GTA-5",
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-',value);
// }      // will give ERROR , objects arn't iteratable


// -----------------------------------------------------------------------------------------------------------------------------------


// >>>>>>>>>>>>>>>>>  For in  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const gameObj = {
    "Game1":"PUBG",
    "Game2":"GOW",
    "Game3":"GTA-5",
}

for (const key in gameObj) {
    // console.log(key);
}

for (const key in gameObj) {
    // console.log(gameObj[key]);
}

for (const key in gameObj) {
    // console.log(`${key} :- ${gameObj[key]}`);
}



//  in arrays 

let gameArray = ['PUBG', 'GOW', 'GTA-5', 'NFS', 'COD']

for (const key in gameArray) {
    // console.log(key);
}

for (const key in gameArray) {
    // console.log(`This ${gameArray[key]} is at index ${key}`);
}


//  in maps

const countryMap = new Map()

countryMap.set('IN', 'India')
countryMap.set('USA', 'United States')
countryMap.set('FR', 'France')
countryMap.set('IN', 'India')

// console.log(countryMap);

for (const key in countryMap) {
    console.log(key);
}