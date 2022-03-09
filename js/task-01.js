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

function findMatches(x, ...args) {
  const matches = []; // Don't change this line
  for (y of x) {
    if (y.includes(args)) {
      matches.push(y);
    }
  }
  // Change code above this line
  return matches;
}
