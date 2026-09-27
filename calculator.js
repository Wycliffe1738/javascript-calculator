// Store all calculations
let history = [];


// Add two numbers
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}


// Subtract two numbers
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}


// Multiply two numbers
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}


// Divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }

    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}


// Add a calculation to the history
function addToHistory(operand1, operand2, operator, result) {
    const calculation = {
        operand1: operand1,
        operand2: operand2,
        operator: operator,
        result: result
    };

    history.push(calculation);
}


// Display calculation history
function displayHistory() {
    if (history.length === 0) {
        console.log("You have no stored calculations.");
        return;
    }

    console.log("\nCalculation History:");

    history.forEach((calculation, index) => {
        console.log(
            `${index + 1}. ${calculation.operand1} ${calculation.operator} ${calculation.operand2} = ${calculation.result}`
        );
    });
}


// Test the operations
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));


// Display history
displayHistory();
