const form = document.querySelector('#name-input');
const text = document.querySelector('h1');
const span = document.querySelector('#name-output');
form.addEventListener('input', e => {
  e.preventDefault();
  const formInput = e.target.value.trim();
  if (formInput === '') {
    console.log(text.textContent);
  } else {
    span.textContent = `${formInput}`;
    console.log(span);
  }
});