// Calculator history
let history = [];

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }

    return a / b;
}

// Save a calculation to history
function saveCalculation(a, operator, b, result) {
    const calculation = `${a} ${operator} ${b} = ${result}`;
    history.push(calculation);
}

// Display calculation history
function showHistory() {
    if (history.length === 0) {
        console.log("No calculations in history.");
        return;
    }

    console.log("\nCalculation History:");

    history.forEach((calculation, index) => {
        console.log(`${index + 1}. ${calculation}`);
    });
}


// Test the calculator

let number1 = 10;
let number2 = 5;

let result1 = add(number1, number2);
console.log(`${number1} + ${number2} = ${result1}`);
saveCalculation(number1, "+", number2, result1);

let result2 = subtract(number1, number2);
console.log(`${number1} - ${number2} = ${result2}`);
saveCalculation(number1, "-", number2, result2);

let result3 = multiply(number1, number2);
console.log(`${number1} * ${number2} = ${result3}`);
saveCalculation(number1, "*", number2, result3);

let result4 = divide(number1, number2);
console.log(`${number1} / ${number2} = ${result4}`);
saveCalculation(number1, "/", number2, result4);

// Display history
showHistory();
