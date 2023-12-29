function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeButton = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

colorChangeButton.addEventListener('click', event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
});