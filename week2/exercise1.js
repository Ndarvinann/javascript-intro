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
const prompt = require("prompt-sync")({sigint:true}) // summoning the prompt command. 
let base = parseFloat(prompt("Enter base: "));//prompt() returns a string, and you need to explicitly convert it before assigning it.
let height = parseFloat(prompt("Enter height: "));
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let a = parseFloat(prompt("Enter side a: "));
let b = parseFloat(prompt("Enter side B: "));
let c = parseFloat(prompt("Enter side C: "));
let perimeter= a+b+c;
console.log(`The perimeter of the triangle is: ${perimeter}`);

// use of switch. 
let weatherNow = prompt(` Whats the weather like today?`)
switch(weatherNow){
  case 1:
    weatherNow === `Rainy`;
    console.log("You need to carry an umbrella");
    break;
    case 2:
    weatherNow  === `Cloudy`
    console.log(" you might need an umbrella");
    break;
    case 3:
    weatherNow === `sunny`
    console.log(`Go outside and photosynthesize`);
    break;
    default:
      console.log(`Invalid response`)
}