// two things control the source code decision making. ie if statements, looping, iterations. 
// the synatx
//if (condition){
    // this part of the code runs if the condition is true.
//};
/*
let number =6;
if (number>0){
    console.log(`${number} is an integer`)
};
// string 
let weather = "raining";
if (weather = `raining`){
    console.log(`remember to carry an umbrella`)
} // use the const-prompt thing to see them in the terminal. 
else if(weatherNow ===cloudy){
   console.log(`you might need an umbrella`)
}
else {
    console.log(`no need for an umbrella`)
};
// boolean//
let isRaining = true;
if (isRaining){
    console.log(`remember to carry an umbrella`)
};
// else
let numberTwo = 7;
if(numberTwo){
console.log(`${numberTwo} is a positive integer`)
}
else{
    console.log(`${numberTwo} is a negative integer`)
}; 
// function, being able to perform an action. create, read, update, delete.  functionality, quality and constraints.
//constraints is limitations( the browser where it runs.)

/*function add(a,b){ (parameters(values passed into fuctions), arguments(actual values ) return(result of a working thing.))
return a+b
}*/
/*function checkout(){
    // some logic checkout product online 
}
// function call.  
checkout()

let student = {
name: "Ann", // name is key, ann is value
age: 12,
//method-function written inside an object
sport: ()=>{
// Ann plays dodgeball
    }   
}

//scope.(globalVariable vs localVar)
let globalVar = `i am a global variable`;
function foo(){
    let localVar = `i am a local variable`;
}
foo()// how to call a function

// add two numbers with parameters
function add(){
    let a=10;
    let b = 30;
    let sum = a+b
    console.log(sum)
}
add(a,b)

// functions without parameters
function add(x,y){
    let sum = x+y
    return sum;
}
console.log(add(5,3));
function square(i){
    let square = i*i;
    return square
}
square(75);

// expression functions 
let square = function(j){
}
// arrow functions 
const square =(a)=> (a*a); // this is function short hand.
square()*/

//relevance to kgl
//total cost( for all the items ) arrays maybe? 
function totalCost(produce, pricePerKg, quantity){
    let totalprice = pricePerKg*quantity;
    console.log(`the total price of  ${quantity} kg of  ${produce} is ${totalprice} Ugx` );
}
totalCost(`maize`,3000, 45);
totalCost(`beans`,3000, 115);