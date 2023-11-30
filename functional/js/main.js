document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const stringDepositAmount = depositField.value;
    const depositAmount = parseFloat(stringDepositAmount)

    if (isNaN(depositAmount)) {
        alert('please enter a valid amount')
        return
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const stringDepositTotal = depositTotalElement.innerText;
    const depositTotalAmount = parseFloat(stringDepositTotal)

    const currentDepositTotal = depositTotalAmount + depositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const stringBalanceTotal = balanceTotalElement.innerText;
    const prevBalanceTotalAmount = parseFloat(stringBalanceTotal);

    const currentBalanceTotal = prevBalanceTotalAmount + depositAmount;
    balanceTotalElement.innerText = currentBalanceTotal



    depositField.value = ''
});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    const stringWithdrawField = withdrawField.value;
    const newWithdrawAmount = parseFloat(stringWithdrawField);

    if (isNaN(newWithdrawAmount)) {
        alert('please enter a valid amount')
        return
    }

    const withdrawElement = document.getElementById('withdraw-total');
    const stringWithdrawElement = withdrawElement.innerText;
    const withdrawTotalAmount = parseFloat(stringWithdrawElement);

    const currentWithdrawTotal = newWithdrawAmount + withdrawTotalAmount
    withdrawElement.innerText = currentWithdrawTotal

    const balanceTotalElement = document.getElementById('balance-total');
    const stringBalanceTotal = balanceTotalElement.innerText;
    const prevBalanceTotalAmount = parseFloat(stringBalanceTotal);

    const currentBalanceTotal = prevBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal
    
    withdrawField.value = ''
})