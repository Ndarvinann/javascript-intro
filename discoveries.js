//these are things worth knowing. 
//parseFloat() is a built-in JavaScript function that converts a given string into a floating-point (decimal) number. parse means to read and convert.ParseFloat is specifically designed to convert strings into numbers.
//It ignores spaces at the beginning.It stops reading once it encounters a non-numeric character (except for the decimal point). If the first character is not a number or a sign (+ or -), it returns NaN (Not a Number). definition of parse in english. 
// how it works 
console.log(parseFloat("42.5"))// 42.5
console.log(parseFloat("   42.5abc")); //42.5(ignores the space and "abc")
console.log(parseFloat("12.34kg"))//here, its extracting numbers from strings. it will return 12.34. 
console.log(parseFloat("10")+ parseFloat("5")); // ensuring calculations work properly. if the value is a number, there is no use for parseFloat. we are using it for "prompt" this function expects strings. 
console.log(parseFloat("3.14.159"));// 3.14, it stops reading at the second .
console.log(parseFloat("abc42")); //NaN(not a number)stops reading at non-numerical values.
console.log(parseFloat("10e3"));// 1000, scientific notation.
console.log(parseFloat("   -55.78"));// -55.78. ignores spaces. 

// search() method;
//1. case-insensitive searches
let text = "Hello world";
console.log(text.search(/world/i)); //i for case-insensitivity.
console.log(text.indexOf(/world/i));// wont work coz index of is for strings only, so -1. push case sensitivity to search.
console.log(text.indexOf('world'));
const y = "Start: This is the beginning.";
const position = y.search(/^Start/); // ^ matches the start of the string
console.log(position); // Output: 0, because start is at the start of the string. 

const text2 = "This is the beginning. Start.";
const position2 = text2.search(/^Start/); // ^ matches the start of the string
console.log(position2); // Output: -1 . there is no start at the beginning of the string. 

// area of a triangle

"use strict";
 const prompt = require("prompt-sync")({sigint:true});//ive installed the prompt feature. // allows the user to exit the program without crashing it.
 let length = parseFloat(prompt("enter the Length: "));
 let width = parseFloat(prompt("Enter the width: "));
 let area = length * width;
 let perimeter = 2*(length * width);
 console.log(`Area : ${area}`);
 console.log(`perimeter:  ${perimeter}`);

 // using a do-while loop;
 let base, height; // declare the variables 
do
{
base = prompt("Enter base: "); //user is asked to input the base
} while (isNaN(base)|| base.trim()==="");//checks if the input base is a number. if the input cant be converted to number, its true. the base.trim, removes any leading and trailing spaces, making sure the user doesnt enter nothing. 
do
{
  height = prompt("Enter height: ");
} while (isNaN(height)|| height.trim()===""); //The loop continues as long as either isNaN(base) is true (meaning the input is not a number) or base.trim() is an empty string. In essence, it loops until a valid number is entered.

base = Number(base);
height = Number(height);

const d = 0.5* base* height;
console.log(`The area of the triangle is ${d}`);
//This prompts the user for the base and height of a triangle, validates the input to ensure it's numeric and not empty, calculates the area, and then displays the result.

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
// example2
function isEven(number){
  return number %2===0? "Even" : "odd";// return a number that gives no remainders when divided by 2. if yes, return even, otherwise, odd.
}
console.log(isEven(4)); // output is even
console.log(isEven(7)); // output is odd

// switch statements. === use only strict equality for comparisons. 
//when you have multiple possible values to check against. (alternative to if, elseif, else) --THE SYNTAX--
/*switch(expression){--this is evaluated once. results from here are compared against all the cases. 
case value 1
// code to execute if expressions===value 1
break;// terminates the execution of the switch statement. 
case value 2
// code to execute if expression === value 2
break;
default:
  code to execute if there are no matches
} *
}
/*
martin- chocolate
brian - bread 
lastone - sweets 
default - not available. */
let contact = 2;
switch(contact){
  case 1:
  console.log("chocolate")
  break;
  case 2:
  console.log("bread")
  break;
  case 3:
  console.log("sweets")
  break;
  default:
  console.log("not available")
}

  if( contact===2)
    {
    console.log("chocolate");
  }
  else if(contact===3)
    {
    console.log("bread");
  }
  else if(contact ===1)
    {
        console.log("sweets");
      }
else
{
            console.log(" not available")
}

//a regular expression literal is a way to create a regular expression object directly in your code. It's enclosed within forward slashes (/).(a/g)

// functions.
//--blocks of re-usable code that performs specific tasks. they help grp related statements together, execute specific operations then return values. they accept input values and that modify their behavior. 
//syntax-- function keyword () {} --
//e.g function greet(name){
// return `Hello, ${name}!`
// }; this is a function. 
//const greet = (name)=> `Hello, ${name}!`; // another way of using functions. const and let store data. functions perfom actions.
// intoducing selectors and querrys. 
let paragraph = document.querySelector('p'); // This selects the first paragraph element it finds in your HTML document.
console.log(paragraph.textContent); //This accesses only the text content of that selected paragraph. leave it without if you want the string as it exists.
// byTagName
let paragraph1= document.getElementsByTagName('p');
let firstParagraph = paragraph1[0];// js looks at these paragraphs like arrays and manipulates them that way. 1st index is 0.
console.log(firstParagraph);

//get each paragraph using querry selector. 
 let paragraph2 = document.querySelector("#secondParagraph")//This selects the paragraph element with the specific ID "secondParagraph". 
console.log(`paragraph2:`, paragraph2);
// apart from the snytax, getElementById, is specifically designed to retrive a single element based soley on its id. its faster than the querryselector.  the query selector accepts any valid css selector as an argument. its takes ID(#id), class(.class), tagname(tagname), attributes[attribute] and as a result slower. 

//node list is an ordered list of nodes(elements,text,attributes, comments). a nodeList is a way to store and manipulate collections of elements retrieved from the DOM.  //get all the p as a nodeList. document.querySelecorAll(tagname)//get all paragraphs using document.querySelectorAll.
console.log (document.querySelectorAll('p')); // the output is a simplified view of what elements are in the list. all paragraphs, and their ids.
//4 loop through the node list to get a text content of each paragraph.
// using a for...of loop.
for(let graph of graphs){ // for each graph in the list of graphs, do something. 
  console.log(graph.textContent);// gets the actual text in the paragraph. 
}
// or trad. for loop 
for(let i =0; i<graphs.length; i++){//checks that the value of i is less than the number of elements in the node list. the loop will run as long as this is true. 
    console.log(graphs[i].textContent); //paragraphs[i]This accesses the paragraph element at the index i in the paragraphs NodeList. [0] the way we use this in arrays. 
}
//5 
//Set a text content to paragraph the fourth paragraph,Fourth Paragraph.
let x = document.getElementById('fourthParagraph'); // selects the paragraph with the fourthparagraphID.
x. textContent = "fourth Paragraph"; //The .textContent property replaces the existing text content of the element with the new string you provide.

//6
// why the getElementById has .value at the end of it. check exercise3.html
let kglstore = {
  beans:100,
  maize : 200,
  cowPeas: 300,
};

function updateStock() {
  let produce = document.getElementById("produce").value;
  let newStock = document.getElementById('newStock').value; //.value retrives the current value the user has entered or selected. usually used with input elements(input, select,textarea.)
  if(newStock !==""&&newStock>0){
      kglstore[produce] = parseInt(newStock);

      document.getElementById(produce +"Stock").textContent = newStock;
      alert(`stock updated successfully!`)}
      else {
          alert(`Please enter valid stock quantity!`);
      }
    }
//<p><div><span> elements dont get a .value because they are primarily used for displating content. they ge a .textContent.