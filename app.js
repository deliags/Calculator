const buttons = document.querySelectorAll(".button");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll('[data-type="operator"]');

let currentOperand = document.querySelector(".current-operand");

const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector('[data-type="equals"]');

let firstOperand = '';
let chosenOperator = '';

const displayValue = (keyPress) => {
  const currentValue = keyPress.textContent;
  if (currentValue === '.' && currentOperand.textContent.includes('.')) return;

  firstOperand = (currentOperand.textContent += currentValue);
  
  return firstOperand;
};

numberBtn.forEach(button => {
  button.addEventListener("click", () => {
    displayValue(button);
  });
});

operatorBtn.forEach(button => {
  button.addEventListener("click", () => {
    chosenOperator = button.textContent;
    displayValue(button);
    return chosenOperator;
  });
});


equalsBtn.addEventListener("click", () => {
  operate(firstOperand, chosenOperator, 0);
  
});


//Operations
function add (a, b) {
  let operation = (a + b);
  currentOperand.textContent = operation;
  return a + b;
};

function subtract(a, b) {
  currentOperand.textContent = (a - b)
  return a - b;
};

function multiply(a, b) {
  currentOperand.textContent = (a * b)
  return a * b;
};

function divide(a, b) {
  currentOperand.textContent = (a / b)
  return a / b;
};


const operate = (firstNum, operator, secNum) => {
  const prev = parseFloat(firstNum);
  const current = parseFloat(secNum);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      return add(prev, current);
    case '-':
      return subtract(prev, current);
    case '×':
      return multiply(prev, current);
    case '÷':
      if (current === 0 || current === '0') {
        currentOperand.textContent = 'Stop it!';
      } else {
        return divide(prev, current);
      };
    default:
      break;
  }
}

const clear = () => {
  currentOperand.textContent  = '';
  previousOperand.textContent  = '';
}

function resetDisplay() {
  currentOperand.textContent = '';
};

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', resetDisplay());