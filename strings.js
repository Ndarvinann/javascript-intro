// obsevations; the language is quite literal. and very case sensitive. Let isnt the same as let

console.log("I hope you are okay.\n are you?");
console.log("Einstein said \"we shall overcome\"");
let js = "javascript";
console.log(js.length); //.give the total length /number of xters//check out the pyramid game. 

// exercise 1

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4); // true (same value and type) strict quality type.
console.log(4!=4); // false, inequality checker, returns true if 4=3.
console.log(4!==4);//false. The strict inequality operator checks if the values are not equal in either value or type.
console.log(4!="4");// false (because "4" is converted to 4)
console.log(4=='4');// true, because JavaScript converts the string "4" to a number before comparison
console.log(4==='4');//it checks both value and data type.
//2. 
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you`);
//
let challenge = '30 days of Javascript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());//The .toUpperCase() method converts all the characters in the string to uppercase.
console.log(challenge.toLowerCase());//Ln30
console.log(challenge.slice(0, challenge.indexOf(' ')));//This directly slices the first word from challenge without the need to store it in a separate variable.//the space.
console.log(challenge.slice(0, challenge.indexOf(''))); //returns nothing. the'' indicates string, and zero is always at the start of any string. so this becomes slice(0,0)
console.log(challenge.slice(3));// explanation, slice(3) extracts the 1st three characters of '30 days of javascript', which are '30 '. the space.
console.log(challenge.includes("script"));// the bitch is case sensitive. checks if the variable has "script" in it. returns true.
console.log(challenge.split());// takes the whole string and puts it in an array bracket. [ ]. literally. thats it. 
console.log(challenge.split(""));//no spaces, it splits by character of string individually('3', '0', 'd'). you laughed so hard at this. 
console.log(challenge.split(" "));//splits the string at each space (" "), creating an array of words. 
console.log(challenge.split("of"));// splits at of. removes of. interesting stuff. 
console.log(challenge.replace("Javascript","python"));//this bitch case sensitive too.
console.log(challenge.replace(/javascript/i, "Python"));// this is how we solve case sensitivity. 
let movies = 'facebook, Google,microsoft, Apple, IBM, Oracle,Amazon'
console.log(movies.split(",")); // it worked like it should the 1st time. anyway, refer to "of" above.

// excercise 3 
console.log(challenge.charAt(15)); //characterAT index 15. String indices are zero-based, meaning the first character is at index 0, the second at index 1, and so on. so its returning s.
console.log(challenge.charCodeAt('j'));//A character code (or Unicode/ASCII code) represents a unique number that corresponds to a specific character in a character encoding system. 'A' has an ASCII code of 65 in ASCII. /*charCodeAt() expects an index number, not a character.*/ when a character is assigned to charcode, since it expects numbers, it coarses j into a number. its ASCII number is 51, so it will assume you have input 51, and since 51 is the only input, it will return 51. the code of j is 106. J is 74.
console.log(challenge.charCodeAt(15));//f you're getting 115, it means that index 15 is likely pointing to a character that is 's' (lowercase), not 'S' (uppercase)(code 83). The character code for lowercase 's' is 115. case sensitive. 
console.log(challenge.charCodeAt(11));//J is 74, j is 106.
console.log(challenge.indexOf('a')); // the indexof method returns the index(number) of the  1st occurance of character in a string. 'a' is at index 4. they start from 0.
console.log(challenge.indexOf('a', challenge.indexOf('a')+1))// the second ocurance of A. challenge.indexOf('a', challenge.indexOf('a') + 1): This uses the result of the first indexOf('a') (which is 4), and adds 1 to start the search after the first 'a'. This will give you the second occurrence of 'a' (which is at index 12).
console.log(challenge.lastIndexOf('a'));// it does exactly that. last occurance of a. 
let x = 'You cant start a sentence with because because because is a conjuction';// index(number) of 1st occurance of because. 
console.log(x.indexOf('because'));//counts from zero to the 1st because, including spaces.
console.log(x.search('because'));// its at position 31. would return -1 if not found. 
// indexof searches simple exact substring. search() takes regular expressions, pattern matching, case-insensitive searches,and more complex search criteria. its superior to indexOf.