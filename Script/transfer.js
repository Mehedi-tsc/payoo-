document.getElementById('transfer-btn')
    .addEventListener('click',function(){
        const accNumber = getValueFromID('transfer-acc-number');
        if(accNumber.length!==11){
            alert('Invalid Number');
            return;
        }
        const inputAmount=getValueFromID('transfer-amount');
        const balance=getBalance('balance');
        const newBalance = balance-Number(inputAmount);
        if(newBalance<0){
            alert('Invalid Amount')
            return;
        }
        const pin = getValueFromID('transfer-pin')
        if(pin==='1234'){
            alert('Transfer Money Succesful')
            setBalance(newBalance);
            const transaction = document.getElementById('transaction');
            const newHistory = document.createElement('div');
            newHistory.innerHTML=`
            <div class="bg-base-200 p-5">
            Transfer ${inputAmount} taka succesuful to ${accNumber} at ${new Date()} and your new balance is ${newBalance}
            </div> 
            `;
            transaction.append(newHistory);

        }
        else{
            alert('Wrong Pin')
        }

    })