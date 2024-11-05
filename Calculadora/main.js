let display = document.getElementById("display");
let Operacaoatual = null;
let primeirovalor = null;

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function setOperation(operacao) {
    primeirovalor = parseFloat(display.innerText);
    Operacaoatual = operacao;
    display.innerText = "0";
}

function calculate() {
    if (Operacaoatual && primeirovalor !== null) {
        const segundovalor = parseFloat(display.innerText);
        let resultado;
        switch (Operacaoatual) {
            case '+':
                resultado = primeirovalor + segundovalor;
                break;
            case '-':
                resultado = primeirovalor - segundovalor;
                break;
            case '*':
                resultado = primeirovalor * segundovalor;
                break;
            case '/':
                resultado = primeirovalor / segundovalor;
                break;
        }
        display.innerText = resultado;
        Operacaoatual = null;
        primeirovalor = null;
    }
}

function clearDisplay() {
    display.innerText = "0";
    primeirovalor = null;
    Operacaoatual = null;
}
