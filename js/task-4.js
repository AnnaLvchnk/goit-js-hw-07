const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    email: e.target.email.value.trim(),
    password: e.target.password.value.trim(),
  };
  if (e.target.email.value === '' || e.target.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    form.reset();
  }
});