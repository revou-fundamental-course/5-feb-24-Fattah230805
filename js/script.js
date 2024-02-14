const inputField = document.getElementsByClassName("input-field")[0]
const result = document.getElementById("result")
const buttonConvert = document.getElementsByClassName("my-button")[0]

inputField.addEventListener ('input', function () {
    const inputValue = inputField.value
    console.log(inputValue)
    if (validateInteger(inputValue)) {
        buttonConvert.disabled = false
    } else {
        buttonConvert.disabled = true
    }
})

function validateInteger(userInput) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(userInput)
}