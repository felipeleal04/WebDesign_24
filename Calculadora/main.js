let display = document.getElementById("display");
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function setOperation(operation) {
    firstOperand = parseFloat(display.innerText);
    currentOperation = operation;
    display.innerText = "0";
}

function calculate() {
    if (currentOperation && firstOperand !== null) {
        const secondOperand = parseFloat(display.innerText);
        let result;
        switch (currentOperation) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        display.innerText = result;
        currentOperation = null;
        firstOperand = null;
    }
}

function clearDisplay() {
    display.innerText = "0";
    firstOperand = null;
    currentOperation = null;
}
