// index.js

// Assuming the Dodger element has an ID of 'dodger'
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the container width is 400px and Dodger width is 40px
    dodger.style.left = `${left + 1}px`;
  }
}