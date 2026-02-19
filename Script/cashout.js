document.getElementById('login-btn')
    .addEventListener('click',function(){
    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length!=11){
        alert('Invalid Agent Number')
        return;
    }
    
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    const balanceElement= document.getElementById('balance');
    const balance = balanceElement.innerText;
    const newBalance= Number(balance)-Number(cashoutAmount);
    if(newBalance<0){
        alert('Invalid Amount');
        return;
    }
    const pinInput=document.getElementById('cashout-pin');
    const pin=pinInput.value;
    if(pin==='1234'){
        alert('cashout successfull')
        balanceElement.innerText=newBalance;
    }
    else{
        alert('Wrong Pin')
    }
    
})