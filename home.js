document.getElementById('add-money').addEventListener('click',function(event){
  event.preventDefault();
  const pinNumber = document.getElementById('Pin-number').value;
  if(pinNumber === '12345'){
    const addMoney = document.getElementById('add-money').value;
    const Balance = document.getElementById('balance').innerText;
    Balance = Balance+addMoney;
  }
  else{
    alert('Wrong PIN number.')
  }
  
})