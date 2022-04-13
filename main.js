'use strict';

function colorChange() {
  const colorChangeEls = document.querySelectorAll('.color-change')

  for (const el of colorChangeEls) {
    el.classList.add('red');
  }
}

document.querySelector('.color-changer').addEventListener('click', colorChange);

function validateForm(evt) {
  evt.preventDefault();

  const numberInput = document.querySelector('#number-input');
  const numberNumber = Number(numberInput.value);

  const formFeedback = document.querySelector('#formFeedback');
  if (isNaN(numberNumber) || numberNumber >= 10) {
    formFeedback.innerText = 'Please enter a smaller number';
  } else {
    formFeedback.innerText = 'You are good to go!';
  }
}

document.querySelector('.number-form').addEventListener('submit', validateForm);