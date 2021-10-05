// Get the bill
const billInput = document.querySelector('#bill');
let bill = 0;

billInput.addEventListener('input', () => {
    bill = parseFloat(billInput.value);
});
