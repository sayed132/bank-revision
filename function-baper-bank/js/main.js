

document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputField('deposit-input')

    const prevDepositAmount = getElementById('deposit-total');

    const currentDepositAmount = newDepositAmount + prevDepositAmount;

    setElementValueById('deposit-total', currentDepositAmount);

    const prevBalanceTotal = getElementById('balance-total');
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    setElementValueById('balance-total', currentBalanceTotal);
})

document.getElementById('withdraw-btn').addEventListener('click', function (){
    const newWithdrawAmount = getInputField('withdraw-input');

    const previousWithdrawAmount = getElementById('withdraw-total');

    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;

    setElementValueById('withdraw-total', currentWithdrawAmount);

    const prevBalanceTotal = getElementById('balance-total');
    const currentBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    setElementValueById('balance-total', currentBalanceTotal);
})