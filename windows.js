//let number = prompt ('write number here')
//console.log(number);

// dateObject
//21st/Feb/2025
const now = new Date();
console.log(`we are in the year:${now.getFullYear()}`);
console.log(`we are in the month: ${now.getMonth()+1}`);//index of jan is 0; +! gives the correct dates.
console.log(`The date today is : ${now.getDay()} /${now.getDate()} / ${now.getMonth()+1} / ${now.getFullYear()}`);
console.log(`The day today is : ${now. getDay()}`);
console.log(`The time now is :${now.getHours()}`);
console.log(`The minute now is : ${now.getMinutes()}`);
const secondsElapsed = Math.floor(now.getTime()/1000); //math.flow makes sure the return is a whole number. getTime returns miliseconds*/1000* to get seconds.
console.log(`seconds elapsed since Jan 1,1970: ${secondsElapsed}`);
 
//exercise 2
const prompt = require("prompt-sync")({sigint:true})
let base = parseFloat(prompt("Enter base: "));//prompt() returns a string, and you need to explicitly convert it before assigning it.
let height = parseFloat(prompt("Enter height: "));
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let a = parseFloat(prompt("Enter side a: "));
let b = parseFloat(prompt("Enter side B: "));
let c = parseFloat(prompt("Enter side C: "));
let perimeter= a+b+c;
console.log(`The perimeter of the triangle is: ${perimeter}`);

//turns out prompt is a browser specific command and node.js doesnt recognise it.

//option 2. do while loop.


