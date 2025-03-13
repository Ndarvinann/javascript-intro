// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };

// for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

// examples for dynamic properties
// const user1 = { name: "Alice", age: 30, city: "Mbale" };
//   const user2 = { name: "Felicity", email: "fel@example.com", occupation: "Developer" };

// function displayProfile(profile) {
//     for (let key in profile) {
//       console.log(`${key}: ${profile[key]}`);
//     }
//   }

  
//   displayProfile(user1);
//   displayProfile(user2);

//   // for ....of .. 
//const grains = ['peas', 'beans', 'maize'];

// for (let grain of grains ) {
//     console.log(grain);
// }

//for-- of in strings
//const greet = "Hello";
// for (const char of greet) {
//   console.log(char);
// }

// for each

//const grains = ['peas', 'beans', 'maize'];
//grains.forEach(function(grain) {
   // console.log(grain);
//}); // check out no4 of the breakout exercise. this was one of the answers. 

// const names = ["alice", "bob", "charlie"];
//   const formattedNames = [];

//   names.forEach(name => {
//     formattedNames.push(name.charAt(0).toUpperCase() + name.slice(1)); // make the 1st character capital, then add the rest of the string untouched.(A+ lice)
//   });

//   console.log(formattedNames);

// chaining methods.
	//   const products = [
	//     { name: "laptop", price: 1200 },
	//     { name: "Mouse", price: 25 },
	//     { name: "Keyboard", price: 100 },
    //     	    { name: "Headphones", price: 150 },
	//   ];
	
	//   products
	//     .filter(product => product.price > 50)
	//     .forEach(product => {
	//       console.log(` ${product.name} - ugx${product.price}`);
	//     });

    //Mini-Project: Iterating Over Objects and Arrays
    const inventory = {
        beans: { quantity: 10, price: 1000 },
        peas: { quantity: 5, price: 2000 },
       yams : { quantity: 20, price: 3000 }
    };
    
    // // Using for...in to iterate over the inventory object
    // console.log("Inventory using for...in:");
    // for (let product in inventory) {
    //     console.log(`${product}: Quantity - ${inventory[product].quantity}, Price - ${inventory[product].price}ugx`);
    // }
    
    // // Using for...of to iterate over an array of product names
    // const productNames = Object.keys(inventory);
    // console.log("\nInventory using for...of:");
    // for (let product of productNames) {
    //     console.log(`${product}: Quantity - ${inventory[product].quantity}, Price - ${inventory[product].price}ugx`);
    // }
    
    // // Using forEach() to iterate over an array of product names
    // console.log("\nInventory using forEach():");
    // productNames.forEach(function(product) {
    //     console.log(`${product}: Quantity - ${inventory[product].quantity}, Price - ${inventory[product].price} ugx`);
    // });
    