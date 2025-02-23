//dataTypes.js

let name = "Darvin Ann";
let age = 92;
let isStudent = true;
let address = null;
let city;
let scores = [85, 92, 78];
let person = {
  firstName: "kat",
  lastName: "Ryn"
};
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt

console.log("Data type of name:", typeof name);       // String
console.log("Data type of age:", typeof age);         // Number
console.log("Data type of isStudent:", typeof isStudent); // Boolean
console.log("Data type of address:", typeof address);   // Object (special case for null)
console.log("Data type of city:", typeof city);        // Undefined
console.log("Data type of scores:", typeof scores);     // Object
console.log("Data type of person:", typeof person);     // Object
console.log("Data type of bigNumber:", typeof bigNumber); // Bigint


// Demonstrating the difference between null and undefined:
console.log("Is address null?", address === null); // true, the strict operator checks if values are equal and of the same type. 
console.log("Is city undefined?", city === undefined); // true

// Checking the type of a function:
function myFunction() {
  // ...
}
console.log("Data type of myFunction:", typeof myFunction); // Function

//6
let goat;
let cow;
let beans;
let maize;
let soyBeans;
console.log( goat, sex,email,a,b)
                                      // you cant re-declare the same values. 
//7
let cat = 7;
let sex = F
let email = 'ndarvinann@gmail.com';
let a = 9
let b = 15

const numberOfBranches = 2;
let produce = [ beans, maize, rice];
console.log( produce)