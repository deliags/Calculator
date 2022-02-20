const buttons = document.querySelectorAll(".button");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

const displayValue = (keyPress) => {
  const currentValue = keyPress.textContent;
  if (currentValue === '.' && previousOperand.textContent.includes('.')) return;
  return (previousOperand.textContent += currentValue);
};

numberBtn.forEach(button => {
  button.addEventListener("click", () => { displayValue(button); });
});


//Operations
function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};


const operate = (firstNum, secNum, operator) => {
  switch (operator) {
    case 'plus':
      return add(firstNum, secNum);
    case 'minus':
      return subtract(firstNum, secNum);
    case 'multiply':
      return multiply(firstNum, secNum);
    case 'divide':
      if(secNum === 0 || secNum === '0') return 'Stop it!'
      else return divide(firstNum, secNum);
    default:
      break;
  }
}

const clear = (currentOperand, previousOperand, operation) => {
  operation = undefined;
  currentOperand = '';
  previousOperand = '';
};


