const refLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${refLi.length}`);
console.log("");

console.log(refLi);

[...refLi].map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});

// const liEl = document.querySelectorAll('.item');
// console.log(liEl);
// for (const el of liEl) {
//   console.log(`Category: ${el.querySelector('h2').textContent}`);
//   const totalElInCategory = el.querySelectorAll('li').length;
//   console.log(`Elements: ${totalElInCategory}`);
//   console.log("");
// };
// [...liEl].map(item => {
//   const category = item.querySelector('h2').textContent;
//   console.log(`Category: ${category}`);
//   // console.log(`Elements: ${totalElInCategory}`);
//   // console.log("");
// });

// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }

// removeChar("abcd");
// console.log(removeChar("abcd"));

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
//   // const arrname = name.split(" ");
//   // return `${arrname[0].slice(0, 1).toUpperCase()}. ${arrname[1]
//   //   .slice(0, 1)
//   //   .toUpperCase()}.`;
// }

// abbrevName("Sam Harris");
// console.log(abbrevName("Sam Harris"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     console.log("~ this.potions", this.potions);
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potions.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       console.log("~ potion", potion);

//       if (oldName === potion.name) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.getPotions();

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }

//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (elem) {
//     totalPrice += elem;
//     console.log("~ totalPrice", totalPrice);
//   });

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);
