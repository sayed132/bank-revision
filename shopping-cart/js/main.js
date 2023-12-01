function updateQuantity(isIncrease) {
    const phoneQuantityField = document.getElementById('phone-input-number');
    const phoneQuantityString = phoneQuantityField.value;
    const prevPhoneQuantity = parseInt(phoneQuantityString)

    let newQuantity;
    if (isIncrease === true) {
        newQuantity = prevPhoneQuantity + 1;
    }
    else {
        newQuantity = prevPhoneQuantity - 1;
    }
    phoneQuantityField.value = newQuantity

    return newQuantity
}

function updatePrice(newQuantity) {
    const phoneTotalPrice = newQuantity * 1219
    const pricePlusElement = document.getElementById('phone-price');
    pricePlusElement.innerText = phoneTotalPrice
}

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText
    const phoneTotalElementPrice = parseInt(phoneTotalElementString);

    return phoneTotalElementPrice;

}

function setTextElementValueById(elementId, value) {
    const subtotalPriceElement = document.getElementById(elementId);
    subtotalPriceElement.innerText = value
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-price');

    const currentSubTotal = currentCaseTotal + currentPhoneTotal
    setTextElementValueById('subtotal', currentSubTotal);

    const taxTotal = currentSubTotal * 0.001;
    setTextElementValueById('tax-total', taxTotal);

    const finalAmount = taxTotal + currentSubTotal;
    setTextElementValueById('total', finalAmount);
}
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const newQuantity = updateQuantity(true);

    updatePrice(newQuantity)
    calculateSubTotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newQuantity = updateQuantity(false)
    updatePrice(newQuantity)
    calculateSubTotal()
})

function updateCaseQuantity(isIncrease) {
    const phoneQuantityField = document.getElementById('case-input-number');
    const phoneQuantityString = phoneQuantityField.value;
    const prevPhoneQuantity = parseInt(phoneQuantityString)

    let newQuantity;
    if (isIncrease === true) {
        newQuantity = prevPhoneQuantity + 1;
    }
    else {
        newQuantity = prevPhoneQuantity - 1;
    }
    phoneQuantityField.value = newQuantity

    return newQuantity
}

function updateCasePrice(newQuantity) {
    const phoneTotalPrice = newQuantity * 59
    const pricePlusElement = document.getElementById('case-price');
    pricePlusElement.innerText = phoneTotalPrice
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newQuantity = updateCaseQuantity(true);

    updateCasePrice(newQuantity)
    calculateSubTotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newQuantity = updateCaseQuantity(false)
    updateCasePrice(newQuantity)
    calculateSubTotal()
})
