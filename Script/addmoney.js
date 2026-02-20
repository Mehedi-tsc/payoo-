document.getElementById('add-money-btn')
    .addEventListener('click',function(){
        const bankName = getValueFromID('add-money-bank');
        if(bankName==='Select Bank'){
            alert('Please Select a Bank');
            return;
        }
        const accNo = getValueFromID('add-money-number');
        if(accNo.length!==11){
            alert('Invalid Account Number');
            return;
        }
        const addAmount=getValueFromID('add-money-amount');
        const balance = getBalance('balance');
        const newBalance = Number(addAmount)+balance;
        const pin = getValueFromID('add-money-pin');
        if(addAmount===''){
            alert('Write positive value')
            return;
        }
        if(pin==='1234'){
            alert(`Add Money Succesfull from ${bankName}
                at ${new Date()}`);
            setBalance(newBalance);
            const transaction=document.getElementById('transaction-container');
            const newHistory =document.createElement('div');
            newHistory.innerHTML= `
            <div class="bg-base-200 p-5">
            Add money succesuful ${addAmount} taka from ${bankName} bank at ${new Date()} and your new balance is ${newBalance}
            </div>  
            `;
            transaction.append(newHistory);
        }
        else{
            alert('Wrong Pin')
        }
    
    })