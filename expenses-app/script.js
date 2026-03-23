let LIMIT = 10000;
let SUM = 0;
let STATUS = 'Все хорошо';
let STATUS_BAD = 'Все плохо';

const expenseseInputNode = document.querySelector('.expenses__top-input');
const clearExpensesBtnNode = document.querySelector('.expenses__bottom-button');
const addButton = document.querySelector('.expenses__top-button');
const expensesHistory = document.querySelector('.expenses__middle-history-list');
const limitNode = document.querySelector('.limit');
const generalSum = document.querySelector('.general-sum');
const statusNode = document.querySelector('.status-good');
const changeLimitNode = document.querySelector('.popup__input');
const changeLimitButtonNode = document.querySelector('.popup__set-limit-btn');
const setChangeLimitNode = document.querySelector('.expenses__middle-limit-img');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-btn ');
const selectCategoryNode = document.querySelector('.expenses__top-select');

const expenses = [];


statusNode.innerText = STATUS;
limitNode.innerText = `${LIMIT} руб.`;


setChangeLimitNode.addEventListener('click', () => {
  popupNode.classList.toggle('popup-visible');
  document.body.classList.add('body-lock');
})

popupCloseButtonNode.addEventListener('click', () => {
  popupNode.classList.toggle('popup-visible');
  document.body.classList.remove('body-lock');
})

expenseseInputNode.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
})

addButton.addEventListener('click', () => {
  addValueInHistory();
  readStatus(SUM, LIMIT);
})

clearExpensesBtnNode.addEventListener('click', () => {
  clearExpenses();
})

changeLimitButtonNode.addEventListener('click', () => {
  changeLimit();
  popupNode.classList.toggle('popup-visible');
  document.body.classList.remove('body-lock');
})

function addValueInHistory() {
  let inputValue = parseInt(expenseseInputNode.value);
  let choiseSelect = selectCategoryNode.options[selectCategoryNode.selectedIndex].text;
  
  if (isNaN(inputValue)) return;

  expenses.push({
    sum: inputValue,
    category: choiseSelect,
  });

  expensesHistory.innerHTML += `
    <li>${inputValue} руб. - ${choiseSelect}</li>
  `;

  calculateTotal(inputValue);
  clearValue();
}

function clearValue() {
  expenseseInputNode.value = '';
}

function calculateTotal(amount) {
  SUM += amount;
  generalSum.innerText = `${SUM} руб.`;
}

function readStatus(SUM, LIMIT) {
  let overspending = LIMIT - SUM;
  if (LIMIT < SUM) {
    statusNode.innerText = `${STATUS_BAD} (${overspending} руб)`;
    statusNode.classList.add('status-bad');
  }
}

function clearExpenses() {
  expenses.length = 0;
  SUM = 0;
  generalSum.innerText = '';
  expensesHistory.innerHTML = '';
  statusNode.innerText = STATUS;
  statusNode.classList.remove('status-bad');
}

function changeLimit() {
  let newLimit = parseInt(changeLimitNode.value);
  if (isNaN(newLimit)) return;

  LIMIT = newLimit;
  limitNode.innerText = `${LIMIT} руб.`;
}
