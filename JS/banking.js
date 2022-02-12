
// function doubleIt(num) {
//   const result = num * 2;
//   return result;
// }
// const first = doubleIt(3);
// const secound = doubleIt(7);


function getInputValue() {
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);

  // clear input Field
  depositInput.value = '';
  return depositAmount;
}






document.getElementById('deposit-button').addEventListener('click', function () {

  const depositAmount = getInputValue();


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
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmountText = withdrawInput.value;

  const withdrawAmount = parseFloat(withdrawAmountText);


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

  // clear withdraw input field

  withdrawInput.value = '';
});
