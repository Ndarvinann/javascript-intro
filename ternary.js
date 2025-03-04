
const prompt = require("prompt-sync")({sigint:true})
//Ternary operators
//short-hand way of writing an if--else statement.called ternary because it takes three operands. a condition, a value toreturn if the condition is true, a value to return if the condition is false.
// syntax-- condition? expressionIfTrue : expressionIfFalse. 
//condition validates true or false. "?" is the ternary operator. :; expressionIfTrue: if the condition is true, a value is returned. (:) the colon separates the 'true' or 'false' . (false is the reverse)
let age = prompt("How old are you?")
console.log(age >=18? "Adult" : "Minor"); // if the message is greaterthan or equal to 18, return adult, otherwise, return minor. 
// advantages-- code is shorter and more compact, very readable. dont nest them too deep.
let score = prompt(`what did you score in Maths?`);
console.log(score >= 60? "pass" : "fail"); 

//if you do your homework, you'll get sweets. if not, do the dishes.
let homeWorkDone = true
let reward;
if( homeWorkDone){
    reward = `sweets`
}
else{
    reward = `do the dishes`
};
console.log(reward);
// 
let houseCleaned = true;
let after = houseCleaned ? `trip` : `laundry`
console.log(after);
//kgl
let userRole = `manager`
console.log( userRole ===`director` ? `full access` : 'restrict Acess')

//kgl 
let stock =900
let orders = 600
//prompt - not enough stock availabl
//else stock is available but cant give the remainder
if(orders> stock){
   console.log(`not enough stock, cant make the balance`) 
}
else if(orders ===stock){
    console.log(`make the sale`)
}
else{
    stock -=orders
    console.log(`sale sucessful, the remaining stock is${stock}`)
}
// checking for eligibility. 
let trustedBuyer = true;
let amountDue = 150000;
if(trustedBuyer && amountDue <= 100000){
    console.log( `creditsale allowed.`)
}
    else {
        console.log(`buyer not eligible for credit`)
    }