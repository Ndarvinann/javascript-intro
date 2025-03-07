// loops and use of arrays.
// check out exercise 2.
const kilograms = [5 , 10, 20, 30];
let branches = [`main`, `satellite`];
let users = [`manager` , `director`, `salesagent`];
let produce = [`soya`, `maize`, `peas`, `gnuts`, `soy-beans`];
let suppliers = [`John-traders limited`, `AgroFarm`, `Matuga-firms`, `Maganjo-coopertive`];
console.log(suppliers.length);// number of objects in an array.
let firstSupplier = suppliers[2];
console.log(firstSupplier);
console.log(suppliers.length-1);
let stockInventory = [
    { produce : `beans`, quantity : 200 , amount : 7000},
    { produce : `maize`, quantity : 1500 ,amount : 7000},
    { produce : `soya`, quantity : 600 ,amount : 7000},
    { produce : `cow-peas`, quantity : 900 ,amount : 7000},
    { produce : `soy-beans`, quantity : 1200 ,amount : 7000},
];
console.log(`Available stock with quantities:` ,stockInventory)
 let salesRecords = [
    { produce : `beans`, buyer:`micheal`, amountPaid : `70000`, salesAgent: `Alice`, date:`19/03/24`},
    { produce : `peas`, buyer:`Brian`, amountPaid : `100000`, salesAgent: `monique`, date:`19/03/24`},
 ];
 let trustedBuyer = [
    {name:`james`, nin:`cm129086F`, amountDue:75000, dueDate : `25/03/01`},
    {name :`onen`, nin:`cm1265086F`, amountDue:79000, dueDate : `27/03/01`},
 ]
 let salesAgent = [ `Alice`, `Brian`, `Charles`, `Deborah`];

 // loops
//the syntaz
 //for-loop, while-loop, do-while loop, for-of loop(arrays), for-in(objects).
//for( initialization, condition, increment/decrement){
    //conditions go here.}

//for( number=50; number<=93; number++){
  //  console.log(number);
//}
//for(i=0; i<=12; i++){
//console.log(`${i} *${i} = ${i*i}`)
//};
const prompt = require("prompt-sync")({sigint:true})
let num = parseInt(prompt(`enter a number : `)); // user prompt
if(!isNaN(num)){ //is the prompt valid.
for(let i =0; i<=12; i++){
    console.log(`${num} *${i} = ${num* i}`);
}
}
else {
    console.log(`please enter a valid number`);
}

let numbers =[1,3,5,7,9,11];
//let total = numbers.reduce((sum , num)=>sum + num, 0);// reduce makes an array a single value( like sum, product, etc.)
//console.log(total);

//for loop
let total = 0;
for(let num of numbers){
    total+=num;
}
console.log(total);

let sum = 0;
 for(x=0; x<numbers.length; x++){ //1st iteration (x = 0):  sum = sum + numbers[0] → sum = 0 + 1 → sum = 1. 1st out put is 1.  
    //2nd iteration (x = 1): sum = sum + numbers[1] →sum = 1 + 3 → sum = 4 output is 4. 
    sum = sum+numbers[x];
    console.log(sum);
 }