const buttons = document.querySelectorAll(".button");
const displayText = document.querySelector(".display-text");
const displayResult = document.querySelector(".display-result");

const displayValue = (keyPress) => {
  const currentValue = keyPress.textContent;
  displayText.textContent += currentValue;
};

const keyPress = buttons.forEach(button => {
  button.addEventListener("click", () => { displayValue(button); });
});


//Operations
function add(a, b) {
  return a + b;
};

function substract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};