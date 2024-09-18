document.getElementById('add-money').addEventListener('click',function(event){
  event.preventDefault();
  const addAmount = document.getElementById('add-amount').value;
  const pinNumber = document.getElementById('Pin-number').value;

  if(pinNumber === '12345'){
    const Balance = document.getElementById('balance').innerText;
    const BalanceConvNumber = parseFloat(Balance);
    const addMoneyConvNumber = parseFloat(addAmount);
    const newBalance = BalanceConvNumber + addMoneyConvNumber;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('add-amount').value = '';
    document.getElementById('Pin-number').value = '';
  }
  else{
    alert('Wrong PIN, faild to add money. Please try again!')
  }
  
})