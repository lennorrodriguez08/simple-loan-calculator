// Loan amount element
const amount = document.querySelector('#amount');
// Interest element
const interest = document.querySelector('#interest');
// Years to pay element
let yearsToPay = document.querySelector('#years');
// Form element
const form = document.querySelector('#loan-form');
// Monthly payment element
const monthlyPayment = document.querySelector('#monthly-payment');
// Total payment element
const totalPayment = document.querySelector('#total-payment');
// Total interest
const totalInterest = document.querySelector('#total-interest');
// Error message
let errMessage = document.querySelector('.message');
// Result container
const results = document.querySelector('#results');
// Loader container
const loader = document.querySelector('#loading');

form.addEventListener('submit', calculate);

function calculate (e) {

    e.preventDefault();

    if (amount.value === "" || interest.value === "" || yearsToPay.value === "") {

        errorMessage('Please check input fields.', 'red')
    }   else {

        yearsToPay = yearsToPay.value * 12;
        totalInterest.value = amount.value * interest.value / 100;
        totalPayment.value = Number(amount.value) + Number(totalInterest.value);
        monthlyPayment.value = Number(totalPayment.value / yearsToPay).toFixed(2);
        errMessage.remove();
        loader.style.display = 'block';
        setTimeout(showResults, 3000);
    }
}

function errorMessage(message, color) {
    errMessage.textContent = message;
    errMessage.style.color = color;

}

function showResults() {
    results.style.display = 'block';
    loader.style.display = 'none';
    let calculateBtn = document.querySelector('.calculate-button');
    calculateBtn.value = 'Refresh';
    calculateBtn.id = 'refresh-button';
    let refreshBtn = document.querySelector('#refresh-button');

    refreshBtn.addEventListener('click', function() {
        location.reload();
    });
}