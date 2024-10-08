//Ways to create variables
// 1. Using var makes a variable that can be re-assigned and globally referenced
var myName = "Mason";
clownName = "T";

// 2. Using let makes a variable that can be re-assigned values
let myTitle = "The Kangaroo Guy";
myTitle = "The Crocodile Guy";

// 3. Using const makes a variable that cannot be re-assigned values, values that won't need to be changed
const birthDate = "July 18"

// Variable Types

// Primitive Variable Types
// 1. Strings
let str1 = "String 1" ;
const str2 = 'String 2';
const str3 = `Only quotation type that allows line to be broken into multiple lines`;
// Starting quote type must match ending quote type

//2. Number
let myAge = 52;
const oneLessThanZero = -1;
let numberOfKids = 2.3;

// 3. Boolean
let amIBald = true;
const isTheSkyRed = false;

// Complex Variables Types
// 4. Null / Undefined, when a value is left undefined or unassigned
let myCar;
myCar

// 5. Arrays, lists of stuff
const myFavoriteColors = ["black", "blue", "green"];
const randomStuff = [true, 1, "stuff", -200];

// 6. Objects, variables that you need to describe
const person = {
    hairColor: "black",
    eyeColor: "blue",
    // Methods are like functions that belong to an object
    sayMyName() {},
}

// 7. Function
function doSomething() {
    // Make your function do something
}
