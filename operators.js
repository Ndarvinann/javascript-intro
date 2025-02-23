//and(&&)
//addition(+)
//subtraction(-)
//greater, less, equal to(<,>,=)
//exponations(x**2) x to the power 2
//increment 
//equality(==)
//inequality(!=)
//not(!)
//CATEGORIES
//Assignment Operators

//any operator that has an equal sign
//=	Addition assignment (adds and assigns)	x += 5	x = x + 5
//-=	Subtraction assignment (subtracts and assigns)	x -= 2	x = x - 2
//*=	Multiplication assignment (multiplies and assigns)	x *= 3	x = x * 3
///=	Division assignment (divides and assigns)	x /= 2	x = x / 2
//%=	Remainder assignment (modulo and assigns)	x %= 4	x = x % 4
//**=	Exponentiation assignment (raises to power and assigns)	x **= 2	x = x ** 2
//&=	Bitwise AND assignment	x &= 5	x = x & 5
//`	=`	Bitwise OR assignment	`x
//^=	Bitwise XOR assignment	x ^= 2	x = x ^ 2
//<<=	Left shift assignment	x <<= 2	x = x << 2
//>>=	Right shift assignment

//Comparison Operators
//Equal to	5 == 5	true
//!=	Not equal to	5 != 6	true
//>	Greater than	5 > 4	true
//<	Less than	4 < 5	true
//>=	Greater than or equal to	5 >= 5	true
//<=	Less than or equal to
/*Logical Operators*/
/*Increment Operator*/
//Decrement Operator
//Ternary Operators

let pricePerKg = 3000;
let quantity = 10;
let totalCost =pricePerKg*quantity;
console.log(`The price of 10kg is: ${totalCost}ugx`);
console.log("The price of beans is:" +totalCost)

// discounts 
let discount = 500;
let discountPrice = totalCost-discount;
console.log(discountPrice);

//comparison
let buyerMoney = 5000;
let priceOfMaizePerKg = 4000;
console.log(buyerMoney>=priceOfMaizePerKg);

//logical operators
let stockIsAvailable = true;
let buyerIsLegit= false;
console.log(stockIsAvailable & buyerIsLegit);
//concatintion
let buyerName = "felicity";
let productName = "soya";
let receipentMessage = "Thank you," +buyerName+ "you have Purchased" +quantity +"kgs of" + productName;
console.log(receipentMessage);

//assignment operators 
let stock = 100;
let sales = 20;
 stock -= sales;
//stock = stock-sales;
console.log(stock);
//console.log(stock-sales);
 
let salesRevenue=0;
salesRevenue += totalCost;
console.log(salesRevenue);

//order of precedence
let value = 3+(4*5)// BODMAS. brackets take precedence.
console.log(value);

//associativity in js.
console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order
console.log(100 / 50 * 3); //Operations with the same precedence (like * and /) are computed from left to right:
console.log(10/2*4+5-3);