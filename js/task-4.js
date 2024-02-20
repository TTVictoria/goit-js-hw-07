const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim()
  };

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  loginForm.reset();
});

