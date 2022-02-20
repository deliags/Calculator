const buttons = document.querySelectorAll(".button");
const displayText = document.querySelector(".display-text");
const displayResult = document.querySelector(".display-result");

const displayValue = (keyPress) => {
  displayText.textContent += keyPress.textContent;
};

const keyPress = buttons.forEach(button => {
  button.addEventListener("click", () => { displayValue(button); });
});
