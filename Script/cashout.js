document.getElementById('login-btn')
    .addEventListener('click',function(){
        const cashoutNumber = getValueFromID('cashout-number');
        if(cashoutNumber.length!=11){
            alert('Invalid Agent Number');
            return;
        }
        const cashoutAmount = getValueFromID('cashout-amount');
        const balance= getBalance('balance');
        const newBalance = balance-Number(cashoutAmount);
        if(newBalance<0){
            alert('Invalid Amount')
            return;
        }

        const pin = getValueFromID('cashout-pin');
        if(pin==='1234'){
        alert('Cash Out Succefull')
        setBalance(newBalance);
        const transaction=document.getElementById('transaction-container');
            const newHistory =document.createElement('div');
            newHistory.innerHTML= `
            <div class="bg-base-200 p-5">
           Cash Out succesuful ${cashoutAmount} taka at ${new Date()} and your new balance is ${newBalance}
            </div>  
            `;
            transaction.append(newHistory);
        }
        else{
            alert('Wrong Pin')
        }

    })
// document.getElementById('login-btn')
//     .addEventListener('click',function(){
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length!=11){
//         alert('Invalid Agent Number')
//         return;
//     }
    
//     const cashoutAmountInput=document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     const balanceElement= document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     const newBalance= Number(balance)-Number(cashoutAmount);
//     if(newBalance<0){
//         alert('Invalid Amount');
//         return;
//     }
//     const pinInput=document.getElementById('cashout-pin');
//     const pin=pinInput.value;
//     if(pin==='1234'){
//         alert('cashout successfull')
//         balanceElement.innerText=newBalance;
//     }
//     else{
//         alert('Wrong Pin')
//     }
    
// })