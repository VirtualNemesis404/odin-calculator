let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let operatorSymbols = ["/", "x", "-", "+", "=",]

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

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator == "+"){
        return add(num1,num2);
    }
    else if (operator == "-"){
        return subtract(num1,num2);
    }
    else if (operator == "x"){
        return multiply(num1,num2);
    }
    else if (operator == "/"){
        return divide(num1,num2);
    }
}

function updateDisplay(text){
    display.innerText = text
}

function updateNumber(digit,num){
    if (num !== null) {
        if (num == 0){
            num = parseFloat(num)
            digit = parseInt(digit)
        }
        num += digit
    }
    else {
        num = digit
    }

    return num
}

function storeNumbers(event){
    let digit = event.srcElement.innerText
    if (operator === null) {
        if (result === num1){
            num1 = null
        }
        num1 = updateNumber(digit,num1)
        updateDisplay(num1)
    }
    else {
        num2 = updateNumber(digit,num2)
        updateDisplay(num2)
    }
}

function storeOperator(event){
    value = event.srcElement.innerText
    if (num1 === null){
        operator = null
    }
    else{
        if (value !== "="){
            operator = value
            dotButton.removeAttribute("disabled")
        }
    }

}

function dot(event){
    if (num1 === null){
        num1 = 0
    }
    else if (result && num1 === result){
        if (operator === null){
            num1 = 0
        }
    }
    if ( operator !== null && num2 === null) {
        num2 = 0
    }
    storeNumbers(event)
    event.target.setAttribute("disabled", "")
}

function backspace(){

    if (num1 !==null){
        if (operator === null){
            if (num1.length > 1){
                num1 = num1.slice(0,num1.length-1)
                updateDisplay(num1)
            }
            else{
                num1 = 0
                updateDisplay(num1)
            }
        }

        else if (num2 !== null){
            if (num2.length > 1){
                    num2 = num2.slice(0,num2.length-1)
                    updateDisplay(num2)
            }
            else{
                num2 = 0
                updateDisplay(num2)
            }
        }

    }
}

function runCalculator(){

    if (num2 === null){
        return
    }

    result = operate(num1,num2,operator)
    updateDisplay(result)
    dotButton.removeAttribute("disabled")
    num1 = result
    num2 = operator = null
}


const container = document.querySelector(".container");
const digits = document.querySelector(".digits")
const operators = document.querySelector(".operators")
const display = document.querySelector(".display")
const clear = document.querySelector(".clear")

for (let i = 0; i<10; i++){
    const button = document.createElement("button");
    button.className = "btn"
    button.textContent = `${i}`
    digits.appendChild(button)
    button.addEventListener("click",storeNumbers)
}

for (let symbols of operatorSymbols){
    const button = document.createElement("button");
    button.className = "btn"
    button.textContent = `${symbols}`
    operators.appendChild(button)
    button.addEventListener("click",runCalculator)
    button.addEventListener("click",storeOperator)
}

display.textContent = "0"

clear.addEventListener("click", ()=>{
    num1 = num2 = operator = result = null
    updateDisplay(0)
    dotButton.removeAttribute("disabled")
})

const dotButton = document.createElement("button")
dotButton.textContent = "."
dotButton.className = "btn"
const backspaceButton = document.createElement("button")
backspaceButton.textContent = "del"
backspaceButton.className = "btn"

let firstChild = digits.firstElementChild
firstChild.after(dotButton)

digits.insertBefore(backspaceButton,digits.firstChild)

dotButton.addEventListener("click",dot)
backspaceButton.addEventListener("click",backspace)