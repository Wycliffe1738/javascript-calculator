// Store all calculator operations
const history = [];

// Add two numbers
function add(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;

    addToHistory(firstNumber, secondNumber, "+", result);

    return result;
}

// Subtract two numbers
function subtract(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;

    addToHistory(firstNumber, secondNumber, "-", result);

    return result;
}

// Multiply two numbers
function multiply(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;

    addToHistory(firstNumber, secondNumber, "*", result);

    return result;
}

// Divide two numbers
function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }

    const result = firstNumber / secondNumber;

    addToHistory(firstNumber, secondNumber, "/", result);

    return result;
}

// Add a calculation to the history
function addToHistory(firstNumber, secondNumber, operator, result) {
    const calculation = {
        operands: [firstNumber, secondNumber],
        operator: operator,
        result: result
    };

    history.push(calculation);
}

// Display all calculations in the history
function displayHistory() {
    if (history.length === 0) {
        console.log("You have no stored calculations.");
        return;
    }

    console.log("\nCalculation History:");

    history.forEach((calculation, index) => {
        const firstNumber = calculation.operands[0];
        const secondNumber = calculation.operands[1];

        console.log(
            `${index + 1}. ${firstNumber} ${calculation.operator} ${secondNumber} = ${calculation.result}`
        );
    });
}


// Test the calculator

console.log("Addition:", add(0, 5));
console.log("Subtraction:", subtract(0, 5));
console.log("Multiplication:", multiply(0, 5));
console.log("Division:", divide(0, 5));


// Display the calculation history
displayHistory();
