function getValueFromID(id){
    const input = document.getElementById(id);
    const result=input.value;
    return result;
}
function getBalance (id){
    const balanceElement=document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
function setBalance (value){
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText=value;
}
function showOnly(id){
    const addMoney=document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    const transaction=document.getElementById('transaction');
    
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transferMoney.classList.add('hidden')
    transaction.classList.add('hidden');
    const clicked = document.getElementById(id);
    clicked.classList.remove('hidden');
}