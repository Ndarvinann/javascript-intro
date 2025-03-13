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

