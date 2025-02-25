//use of other functions. if, else-if, conditionals, booleans, switch, tannery
// loops-- keep running as long as the condition is true. iteration logic. repeat-while structure. 
//syntax of an if statement.
//if(condition){
    // part of this code runs if the condition is true.
//};
// infinite loop, where it doesnt terminate. used by hackers mainly, or how apps work.
let number = 6;
if(number>0){
    console.log(`${number} is a positive integer`)
}
 let isRaining = true;
 const prompt = require("prompt-sync")({sigint:true}) // summoning the prompt command. 
 //let weather ="raining";
 //if(weather === raining){
    //console.log(`Remember to carry an umbrella`)};
  let weatherNow = prompt(`Is the weather rainy, sunny or cloudy?`);
  if(weatherNow === `rainy`){
    console.log(`You need an umbrella`)
  } else if (weatherNow=== `cloudy`){
    console.log(`you might need an umbrella`)
  }else if(weatherNow=== `sunny`){
    console.log(`wear light clothes`)
  } else{
    console.log(`No need for an umbrella`)
  };
// read about the switch and the ternary  operators.


//Ternary operators
//short-hand way of writing an if--else statement.called ternary because it takes three operands. a condition, a value toreturn if the condition is true, a value to return if the condition is false.
// syntax-- condition? expressionIfTrue : expressionIfFalse. 
//condition validates true or false. "?" is the ternary operator. :; expressionIfTrue: if the condition is true, a value is returned. (:) the colon separates the 'true' or 'false' . (false is the reverse)
let age = prompt("How old are you?")
let question = age >=18? "Adult" : "Minor";
console.log(question); // if the message is greaterthan or equal to 18, return adult, otherwise, return minor. 
// advantages-- code is shorter and more compact, very readable. dont nest them too deep.
let score = prompt(`what did you score in Maths?`);
console.log(score >= 60? "pass" : "fail"); 