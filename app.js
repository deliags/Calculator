const buttons = document.querySelectorAll(".button");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

const periodBtn = document.querySelector('.period')
const topDisplay = document.getElementById('top-screen')
const bottomDisplay = document.getElementById('bottom-screen')

let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let resetDisplay = false

window.addEventListener('keydown', handleKeyboardInput)
equalsBtn.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
periodBtn.addEventListener('click', appendPoint)

numberBtn.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber (number) {
  if (number === '.' && bottomDisplay.textContent.includes('.')) return
  if (bottomDisplay.textContent === '0' || resetDisplay)
    resetScreen()
  bottomDisplay.textContent += number
}

function resetScreen() {
  bottomDisplay.textContent = ''
  resetDisplay = false
}

function clear() {
  bottomDisplay.textContent = '0'
  topDisplay.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function appendPoint() {
  if (resetDisplay) resetScreen()
  if (bottomDisplay.textContent === '')
    bottomDisplay.textContent = '0'
  if (bottomDisplay.textContent.includes('.')) return
  bottomDisplay.textContent += '.'
}

function deleteNumber() {
  bottomDisplay.textContent = bottomDisplay.textContent
    .toString()
    .slice(0, -1)
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = bottomDisplay.textContent
  currentOperation = operator
  topDisplay.textContent = `${firstOperand} ${currentOperation}`
  resetDisplay = true
}

function evaluate() {
  if (currentOperation === null || resetDisplay) return
  if (currentOperation === '÷' && bottomDisplay.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = bottomDisplay.textContent
  bottomDisplay.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  )
  topDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if (e.key === '.') appendPoint()
  if (e.key === '=' || e.key === 'Enter') evaluate()
  if (e.key === 'Backspace') deleteNumber()
  if (e.key === 'Escape') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convertOperator(e.key))
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}