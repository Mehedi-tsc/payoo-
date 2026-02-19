document.getElementById('login-btn')
    .addEventListener('click',function(){
        const inputNumber = document.getElementById('input-number')
        const mobile = inputNumber.value;
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        if(mobile==='01734544516'&& pin==='1234'){
            alert('login succesfully')
            window.location.assign("home.html")
        }
        else{
            alert('Mobile or Pin is not correct')
            return;
        }
    })