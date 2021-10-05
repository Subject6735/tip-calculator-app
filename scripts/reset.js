// Reset button
const resetButton = document.querySelector('#reset-button');

// Disable resetbutton by default
resetButton.disabled = true;
resetButton.classList.add('disabled');

resetButton.addEventListener('click', () => {
    // Reset variables
    bill = 0;
    tip = 0;
    people = 0;

    // Reset inputs
    billInput.value = '';
    customTip.value = '';
    pplNum.value = '';

    // Reset output
    tipOut.innerHTML = '$0.00';
    totalOut.innerHTML = '$0.00';

    // Remove form validation error
    document.querySelector('#pplerror').hidden = true;

    // Remove button clicked states
    const btns = document.querySelectorAll('#tipselect button');
    btns.forEach((btn) => btn.classList.remove('btn-clicked'));

    // Disable resetbutton
    resetButton.disabled = true;
    resetButton.classList.add('disabled');
});
