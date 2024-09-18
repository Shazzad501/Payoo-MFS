// Add money js
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
    alert('Faild to add money. Please try again!')
  }
  
})

// cash out js

document.getElementById('cash-out').addEventListener('click',function(event){
  event.preventDefault();
  const cashOutAmount = document.getElementById('cash-out-amount').value;
  const cashOutPin = document.getElementById('cash-out-pin').value;

  if(cashOutPin === '12345'){
    const Balance = document.getElementById('balance').innerText;
    const BalanceConvNumber = parseFloat(Balance);
    const cashOutAmountConvNumber = parseFloat(cashOutAmount);
    const newBalance = BalanceConvNumber - cashOutAmountConvNumber;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('cash-out-amount').value = '';
    document.getElementById('cash-out-pin').value = '';
  }
  else{
    alert('Faild to Cash Out. Please try again!')
  }
  
})

// add money button js

document.getElementById('money-add').addEventListener('click', function(){
  document.getElementById('add-money-form').style.display = 'block';
})

// cash out button js

document.getElementById('money-out').addEventListener('click', function(){
  document.getElementById('cash-out-form').style.display = 'block';

})

