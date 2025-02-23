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
