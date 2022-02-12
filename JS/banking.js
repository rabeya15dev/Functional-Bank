

function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input Field
  inputField.value = '';
  return amountValue;
}


document.getElementById('deposit-button').addEventListener('click', function () {

  const depositAmount = getInputValue('deposit-input');


  // get current deposit
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;

  const previousdepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousdepositTotal + depositAmount;

  // update balance
  const balanceTotal = document.getElementById('blance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);


  balanceTotal.innerText = previousBalanceTotal + depositAmount;


});


// handle Withdraw Button

document.getElementById('withdraw-button').addEventListener('click', function () {

  const withdrawAmount = getInputValue('withdraw-input');

  // update withdraw Total

  const withdrawTotal = document.getElementById('withdraw-total');
  const previouswithdrawTotalText = withdrawTotal.innerText;

  const previousWithdrawTotal = parseFloat(previouswithdrawTotalText);

  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  // updater balance after withdraw
  const balanceTotal = document.getElementById('blance-total');
  balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


});
