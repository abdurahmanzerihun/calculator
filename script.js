let display = document.getElementById('display');
let digitBtn = document.querySelectorAll('button');
let firstNumber = null;
let operator = null;
let secondNumber = null;
let operatorsArr = ['+', '*', '/', '-'];

digitBtn.forEach(button => {
    button.addEventListener('click', () => {
        let digitValue = button.textContent;

        // Numbers
        if (!isNaN(digitValue)) {
            display.value += digitValue;

            if (operator === null) {
                firstNumber = Number(display.value);
            } else {
                secondNumber = Number(display.value.split(operator).pop());
            }
        }

        // Operators
        else if (operatorsArr.includes(digitValue)) {
            if (firstNumber !== null && operator !== null && secondNumber !== null) {
                // Example: 12 [operator] 3 and you pressed another operator
                firstNumber = operate(firstNumber, operator, secondNumber);
                display.value = firstNumber; // Show intermediate result
                secondNumber = null;
            }

            operator = digitValue;
            display.value += operator;
        }

        // Equal
        else if (digitValue === '=') {
            if (firstNumber !== null && operator !== null && secondNumber !== null) {
                display.value = operate(firstNumber, operator, secondNumber);
                firstNumber = Number(display.value);
                secondNumber = null;
                operator = null;
            }
        }

        // Clear
        else if (digitValue === 'C') {
            display.value = "";
            firstNumber = secondNumber = operator = null;
        }

        // Backspace
        else if (digitValue === 'x') {
            display.value = display.value.slice(0, -1);
        }

        // Decimal point
        else if (digitValue === '.') {
            if (operator === null) {
                let current = display.value || "";
                if (!current.includes('.')) {
                    display.value += (current === "") ? '0.' : '.';
                }
            } else {
                let parts = display.value.split(operator);
                let current = parts[1] || "";

                if (!current.includes('.')) {
                    display.value += (current === "") ? '0.' : '.';
                }
            }
        }
    });
});

// Operation
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '*': return firstNumber * secondNumber;
        case '/':
             if (secondNumber === 0) {
                 return 'ERROR';
             }
            return firstNumber / secondNumber;
    }
}

// Event from keyboard
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key >= "0" && key <= "9" && key.length === 1) {
        pressButton(key);
    } else if (operatorsArr.includes(key)) {
        pressButton(key);
    } else if (key === "Enter") {
        pressButton('=');
    } else if (key === "Escape") {
        pressButton('C');
    } else if (key === "Backspace") {
        pressButton('x');
    } else if (key === '.') {
        pressButton('.');
    }
});

function pressButton(digitValue) {
    digitBtn.forEach((button) => {
        if (button.textContent === digitValue) {
            button.click();
        }
    });
}
