function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputNum = parseInt(inputField.value);
    inputField.value = '';
    return inputNum;
}
function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const oldTotalNum = parseInt(totalElement.innerText);
    totalElement.innerText = oldTotalNum + amount;
}

function updateBalance(balanceId,newBalanceNum){
    const oldBalancetext = document.getElementById(balanceId);
    const oldDepositNum = parseInt(oldBalancetext.innerText);
    oldBalancetext.innerText = oldDepositNum + newBalanceNum;
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositNum = getInputValue('new-deposit');
  if(newDepositNum > 0){
    updateTotalField('total-amount',newDepositNum);
    updateBalance('deposit-amount',newDepositNum);
  }
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawNum = getInputValue('new-withdraw');
  if(newWithdrawNum > 0){
    updateBalance('withdraw-amount',newWithdrawNum);
    updateTotalField('total-amount',newWithdrawNum*-1);
  }
    
});