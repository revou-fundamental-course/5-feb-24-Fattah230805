document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector(".input-field");
    const resultField = document.querySelector(".result-field");
    const convertButton = document.querySelector(".convert-button");
    const resetButton = document.querySelector(".reset-button");
    const reverseButton = document.querySelector(".reverse-button");
    const stepsField = document.querySelector(".steps-field");
    const inputSelect = document.getElementById("input-select");
    const resultSelect = document.getElementById("result-select");

    // Event listener for input field
    inputField.addEventListener('input', function () {
        const inputValue = inputField.value;
        if (validateInput(inputValue)) {
            convertButton.disabled = false;
        } else {
            convertButton.disabled = true;
        }
    });

    // Event listener for convert button
    convertButton.addEventListener('click', function () {
        const inputValue = parseFloat(inputField.value);
        const inputUnit = inputSelect.value;
        const resultUnit = resultSelect.value;
        let conversionSteps = "";

        if (inputUnit === "celsius" && resultUnit === "fahrenheit") {
            resultField.value = (inputValue * 9/5) + 32;
            conversionSteps = `${inputValue} Celsius to Fahrenheit: (${inputValue} × 9/5) + 32 = ${(inputValue * 9/5) + 32}`;
        } else if (inputUnit === "fahrenheit" && resultUnit === "celsius") {
            resultField.value = (inputValue - 32) * 5/9;
            conversionSteps = `${inputValue} Fahrenheit to Celsius: (${inputValue} - 32) × 5/9 = ${(inputValue - 32) * 5/9}`;
        } else {
            resultField.value = inputValue; // No conversion needed
            conversionSteps = "No conversion needed";
        }
        stepsField.value = conversionSteps;
    });

    // Event listener for reset button
    resetButton.addEventListener('click', function () {
        inputField.value = "";
        resultField.value = "";
        stepsField.value = "";
        convertButton.disabled = true;
    });

    // Event listener for reverse button
    reverseButton.addEventListener('click', function () {
        const tempInputValue = inputField.value;
        inputField.value = resultField.value;
        resultField.value = tempInputValue;

        const tempInputUnit = inputSelect.value;
        inputSelect.value = resultSelect.value;
        resultSelect.value = tempInputUnit;

        // Update conversion steps
        const inputValue = parseFloat(inputField.value);
        const inputUnit = inputSelect.value;
        const resultUnit = resultSelect.value;
        let conversionSteps = "";

        if (inputUnit === "celsius" && resultUnit === "fahrenheit") {
            conversionSteps = `${resultField.value} Fahrenheit to Celsius: (${resultField.value} - 32) × 5/9 = ${(resultField.value - 32) * 5/9}`;
        } else if (inputUnit === "fahrenheit" && resultUnit === "celsius") {
            conversionSteps = `${resultField.value} Celsius to Fahrenheit: (${resultField.value} × 9/5) + 32 = ${(resultField.value * 9/5) + 32}`;
        } else {
            conversionSteps = "No conversion needed";
        }
        stepsField.value = conversionSteps;
    });

   
    
});
