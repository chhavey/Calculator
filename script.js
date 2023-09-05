let displayValue = '0';
const MAX_DISPLAY_LENGTH = 12;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue.length <= MAX_DISPLAY_LENGTH) {
        if (displayValue === '0' || displayValue === 'Error') {
            displayValue = value;
        }
        else {
            displayValue += value;
        }
        updateDisplay();
    }
}

function deleteFromDisplay() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function resetDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        if (displayValue.length > MAX_DISPLAY_LENGTH) {
            displayValue = displayValue.slice(0, MAX_DISPLAY_LENGTH);
        }
        updateDisplay();

    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}