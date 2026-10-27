let num1;
let num2;
let operator;

let operatorSymbols = ["÷", "x", "-", "+", "=",]
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    if (operator == "+"){
        return add(num1,num2);
    }
    else if (operator == "-"){
        return subtract(num1,num2);
    }
    else if (operator == "*"){
        return multiply(num1,num2);
    }
    else if (operator == "/"){
        return divide(num1,num2);
    }
}

const container = document.querySelector(".container");
const digits = document.querySelector(".digits")
const operators = document.querySelector(".operators")
const display = document.querySelector(".display")

for (let i = 0; i<10; i++){
    const button = document.createElement("button");
    button.textContent = `${i}`
    digits.appendChild(button)
}

for (let symbols of operatorSymbols){
    const button = document.createElement("button");
    button.textContent = `${symbols}`
   operators.appendChild(button)

}

display.textContent = "0"
