let counterValue = 0;


const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

btnDecrement.addEventListener('click',hendleBtnDecrementClick);
btnIncrement.addEventListener('click',hendleBtnIncrementClick);

function hendleBtnDecrementClick() {
  return value.textContent = counterValue -=1;
};

function hendleBtnIncrementClick() {
  return value.textContent = counterValue +=1;
};
