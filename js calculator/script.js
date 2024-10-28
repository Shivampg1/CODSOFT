// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === 'C') {
            clearCalculator();
        } else if (buttonValue === '&lt;') {
            backspace();
        } else if (buttonValue === '=') {
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(buttonValue)) {
            setOperator(buttonValue);
        } else {
            appendNumber(buttonValue);
        }

        updateDisplay();
    });
});

function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
}

function setOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}

function appendNumber(num) {
    currentNumber += num;
}

function updateDisplay() {
    display.value = currentNumber;
}