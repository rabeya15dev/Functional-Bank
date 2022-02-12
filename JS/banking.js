

function getInputValue(inputID) {
  debugger;
  const inputField = document.getElementById(inputID);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input Field
  inputField.value = '';
  return amountValue;
}

// 

function updateTotalField(totalFieldId, amount) {
  debugger;
  const totalField = document.getElementById(totalFieldId);
  const totalText = totalField.innerText;

  const previousTotal = parseFloat(totalText);

  totalField.innerText = previousTotal + amount;
}

function getCurrentblance() {
  const balanceTotal = document.getElementById('blance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('blance-total');

  /* const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText); */

  const previousBalanceTotal = getCurrentblance();

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document.getElementById('deposit-button').addEventListener('click', function () {

  const depositAmount = getInputValue('deposit-input');
  if (depositAmount > 0) {
    // get and update  deposit total
    updateTotalField('deposit-total', depositAmount);

    // update balance
    updateBalance(depositAmount, true);
  }

});

// handle Withdraw Button

document.getElementById('withdraw-button').addEventListener('click', function () {

  const withdrawAmount = getInputValue('withdraw-input');
  const Currentblance = getCurrentblance();
  if (withdrawAmount > 0 && withdrawAmount < Currentblance) {

    // get and update withdraw Total
    updateTotalField('withdraw-total', withdrawAmount);
    // update balance after withdraw
    updateBalance(withdrawAmount, false);
  }

  if (withdrawAmount > Currentblance) {
    console.log('You can not withdraw more then what you have in your account');
  }
});
