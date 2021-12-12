const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const addList = document.querySelector('ul');

const makeList = array => {
  return ingredients.map(array => {
    const elLi = document.createElement('li');
    elLi.classList.add('item');
    elLi.textContent = array;
    return elLi;
  });
};

const list = makeList(ingredients);
console.log(list)

addList.append(...list)
