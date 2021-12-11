const totalLiEl = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${totalLiEl}`);
console.log("")


const liEl = document.querySelectorAll('.item');
// console.log(liEl);
for (const el of liEl) {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  const totalElInCategory = el.querySelectorAll('li').length;
  console.log(`Elements: ${totalElInCategory}`);
  console.log("");
};





