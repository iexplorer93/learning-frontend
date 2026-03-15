const buttonAdd = document.querySelector('.counter__add');
const buttonReset = document.querySelector('.counter-reset');
const counterText = document.querySelector('.counter__text');

let counter = 0;

buttonAdd.addEventListener('click', () => {
  counter++;
  counterText.innerText = counter;
});

buttonReset.addEventListener('click', () => {
  counter = 0;
  counterText.innerText = counter;
});

