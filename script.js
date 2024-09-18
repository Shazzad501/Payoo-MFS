// login form section start
document.getElementById('login-btn').addEventListener('click', function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById('Phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  
  if(phoneNumber === "123456789" || pinNumber === "12345"){
    window.location.href = 'home.html'
  }
  else{
    alert('Wrong Phone number or PIN number')
  }
})
// login form section end