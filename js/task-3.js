const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const content = event.currentTarget.value.trim();
    
  if (content === '') {
    output.textContent = 'Anonymous';
    console.log(content);
  } else {
    output.textContent = content;
    console.log(input);
  }
});