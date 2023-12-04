function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("generate-pin-input");
  displayPin.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typedNumberField = document.getElementById("typed-number");
  const prevNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = prevNumber.split("");
      digits.pop();
      const newDigits = digits.join("");
      typedNumberField.value = newDigits;
    }
  } else {
    const newTypedNumber = prevNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinElement = document.getElementById("generate-pin-input");
  const currentPin = displayPinElement.value;

  const typedNumberField = document.getElementById("typed-number");
  const newTypedNumberPin = typedNumberField.value;
  const pinSuccess = document.getElementById("pin-success");
  const pinError = document.getElementById("pin-error");

  if (currentPin === newTypedNumberPin) {
    typedNumberField.value = "";
    pinSuccess.style.display = "block";
    pinError.style.display = "none";
  } else {
    typedNumberField.value = "";
    pinError.style.display = "block";
    pinSuccess.style.display = "none";
  }
});
