const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  // console.dir(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;
  // console.log("~ pas", password)
  if (password == false || mail == false) {
    alert("Заполните все поля");
    return;
  }

  const formData = {
    mail,
    password,
  }
  console.log(formData);
  form.reset();
  
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log("~ name", name)
  //   console.log("~ value", value)
    
  // })
}