const buttons = document.querySelectorAll('.payment__method__btn');
const cardPayment = document.querySelector('.payment__method--card');
const paypalPayment = document.querySelector('.payment__paypal');
function selectPayment(btn) {
    buttons.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    console.log(btn.innerText);
    if(btn.innerText === 'Card') {
        cardPayment.classList.remove('d-none');
        paypalPayment.classList.add('d-none');
    }
    else if(btn.innerText === 'PayPal'){
        cardPayment.classList.add('d-none');
        paypalPayment.classList.remove('d-none');
    }
}

buttons.forEach(button => button.addEventListener('click', () => selectPayment(button))); 
    
