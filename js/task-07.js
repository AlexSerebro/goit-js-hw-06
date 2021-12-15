const changeInput = document.querySelector('#font-size-control');
const changeSpan = document.querySelector('#text');

changeInput.addEventListener('input', hendleInputChange);

function hendleInputChange(){
  const fontSize = changeInput.innerHTML = changeInput.value;
  // console.log("~ fontSize", fontSize);
  changeSpan.style.fontSize = `${fontSize}px`;
};
  
