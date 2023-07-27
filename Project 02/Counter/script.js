const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const restart = document.getElementById('restart');
const number = document.querySelector('.number');

let numberCount = 0;

increment.addEventListener('click', () => {
  numberCount++;
  number.innerHTML = numberCount;
  updateColoredNumber();
});

decrement.addEventListener('click', () => {
  numberCount--;
  number.innerHTML = numberCount;
  updateColoredNumber();
});

restart.addEventListener('click', () => {
  numberCount = 0;
  number.innerHTML = numberCount;
  updateColoredNumber();
});

const updateColoredNumber = () => {
  if (numberCount > 0) {
    number.style.color = 'green';
  } else if (numberCount < 0) {
    number.style.color = 'red';
  } else {
    number.style.color = '#333';
  }
};
