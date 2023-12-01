function getInputField(inputValue) {
    const inputField = document.getElementById(inputValue);
    const stringInputField = inputField.value;
    const inputFieldValue = parseFloat(stringInputField)
    inputField.value = '';

    return inputFieldValue
}

function getElementById(id) {
    const elementField = document.getElementById(id);
    const stringElementField = elementField.innerText;
    const elementFieldValue = parseFloat(stringElementField);

    return elementFieldValue
}

function setElementValueById(id, newValue) {
    const textElement = document.getElementById(id);
    textElement.innerText = newValue;
}