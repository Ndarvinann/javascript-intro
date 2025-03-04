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

for( number=0; number<=100; number++){
    console.log(number);
}