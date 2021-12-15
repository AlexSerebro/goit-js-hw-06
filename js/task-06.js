const checkInput = document.querySelector('#validation-input');

checkInput.addEventListener('blur',hendleInputBlur)

// const length1 = Number(checkInput.getAttribute('data-length'));
const length = Number(checkInput.dataset.length);
// console.log("~ length1", length1)

// console.log("~ length", length)
// console.log(checkInput.getAttribute('data-length'));

function hendleInputBlur(event) {
  if (event.currentTarget.value.length === length) {
    checkInput.classList.remove('invalid')
    checkInput.classList.add('valid')
    return;
  }
  checkInput.classList.remove('valid')
  checkInput.classList.add('invalid')
  
};
