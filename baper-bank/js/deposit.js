document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = depositField.value;
    const parsNewDepositAmount = parseFloat(newDepositAmount)
  if(isNaN(parsNewDepositAmount)){
    alert('please enter a valid amount')
    return
  }
    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotal = depositTotalElement.innerText;

    const parsPrevDepositTotal = parseFloat(prevDepositTotal)
    const currentDepositTotal = parsNewDepositAmount + parsPrevDepositTotal
    depositTotalElement.innerText = currentDepositTotal

    const balanceElement = document.getElementById('balance-total');
    const stringPrevBalance = balanceElement.innerText;
    const prevBalanceTotal = parseFloat(stringPrevBalance)

    const currentBalanceTotal = prevBalanceTotal + parsNewDepositAmount;

    balanceElement.innerText = currentBalanceTotal



    depositField.value = ''
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const stringWithdrawAmount = withdrawField.value;
    const withdrawAmount = parseFloat(stringWithdrawAmount)
    if(isNaN(withdrawAmount)){
        alert('please enter a valid amount')
        return
      }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const stringPrevWithdrawTotal = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(stringPrevWithdrawTotal)
    

    const balanceElement = document.getElementById('balance-total');
    const stringPrevBalance = balanceElement.innerText;
    const prevBalanceTotal = parseFloat(stringPrevBalance)

    if(withdrawAmount > prevBalanceTotal){
        alert('baper bakn e eto taka nai')

        return
    }

    const currentWithdrawTotal = prevWithdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = prevBalanceTotal - withdrawAmount;
    balanceElement.innerText = currentBalanceTotal





    withdrawField.value = ''
})