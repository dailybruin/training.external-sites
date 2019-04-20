const path = require("path");

console.log("Node.js rules! I am running in " + path.dirname(__filename));

let myObject = {
    numOfDogs: 0,
    numOfCats: 0
};

for(let i = 0; i < 10; i++) {
    console.log(`Iteration ${i}`);
    myObject.numOfDogs++;
    myObject["numOfCats"] = i;
}

console.log(`I have ${myObject.numOfDogs} dogs and ${myObject.numOfCats} cats`);