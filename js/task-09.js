function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const spanColorText = document.querySelector('span.color')
// console.log("~ getRandomHexColor", getRandomHexColor());

changeBackgroundColorBtn.addEventListener('click', onChangeBgColor);

function onChangeBgColor() {
  const color = body.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = color; 
};