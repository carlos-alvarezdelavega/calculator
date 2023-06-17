// Get the display element
const display = document.getElementById('display');

// Store the current input and calculation
let currentInput = '';
let calculation = '';

// Add event listeners to the calculator buttons
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonPress);
});

// Handle button click event
function handleButtonPress(event) {
    const buttonText = event.target.textContent;
    
    // Handle different button types
    switch (buttonText) {
      case 'Clear':
        clearCalculator();
        break;
      case '=':
        calculateResult();
        break;
      default:
        updateInput(buttonText);
        break;
    }
}

// Update the current input
function updateInput(value) {
    currentInput += value;
    display.value = currentInput;
}

// Clear the calculator
function clearCalculator() {
    currentInput = '';
    calculation = '';
    display.value = '';
}

// Calculate and display the result
function calculateResult() {
    if (currentInput) {
      calculation = currentInput;
      try {
        const result = eval(calculation);
        display.value = result;
        currentInput = result.toString();
      } catch (error) {
        display.value = 'Error, please try your calculation again.';
      }
    }
}
