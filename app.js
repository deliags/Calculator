let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let resetScreen = false

const buttons = document.querySelectorAll(".button");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

let previousOperand = document.querySelector("#previous-operand");
let currentOperand = document.querySelector("#current-operand");

const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

// window.addEventListener('keydown', handleKeyboardInput)
// equalsBtn.addEventListener('click', evaluate)
// clearBtn.addEventListener('click', clear)
// deleteBtn.addEventListener('click', deleteNumber)


numberBtn.forEach(button => {
  button.addEventListener("click", () => {
    displayValue(button);
  });
});

operatorBtn.forEach(button => {
  button.addEventListener("click", () => {
    displayValue(button);
    chooseOperation(button.textContent);
  });
});

equalsBtn.addEventListener("click", () => {
  // clear();
  const firstNumber = previousOperand.textContent;
  const operator = operatorBtn.textContent;
  const secondNumber = currentOperand.textContent;
  console.log(operate(firstNumber, operator, secondNumber));
});

const displayValue = (keyPress) => {
  const currentValue = keyPress.textContent;
  if (currentValue === '.' && previousOperand.textContent.includes('.')) return;
  return (previousOperand.textContent += currentValue);
};

function resetDisplay() {
  currentOperand.textContent = ''
  resetScreen = false;
}

const chooseOperation = (sign) => {
  operation = sign;
  currentOperand.textContent = '';
  if (previousOperand.textContent !== '') {
    operate(operation);
  }
}

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


const operate = (firstNumber, operator, secondNumber) => {

  const prev = parseFloat(firstNumber);
  const current = parseFloat(secondNumber);

  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      return prev + current
    case '-':
      return prev - current
    case '*':
      return prev * current
    case '÷':
      return prev / current
    default:
      return
  }
}

const clear = () => {
  let operation = undefined;
  currentOperand = '';
  previousOperand = '';
};