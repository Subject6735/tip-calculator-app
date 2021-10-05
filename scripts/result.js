// Calculate tip & Refresh values on input
const tipOut = document.querySelector('#tipamount-out');
const totalOut = document.querySelector('#total-out');

// Refresh values on input
document.addEventListener('input', (e) => {
    if (
        e.target.matches('#bill') ||
        e.target.matches('#customtip') ||
        e.target.matches('#number-of-ppl')
    ) {
        // Only calculate if no value is 0
        if (
            bill !== 0 &&
            tip !== 0 &&
            people !== 0 &&
            !isNaN(bill) &&
            !isNaN(people) &&
            !isNaN(tip)
        ) {
            // Calculate & write tip
            let totalOutRes = ((bill * (100 + tip)) / 100 / people).toFixed(2);
            let tipOutRes = ((bill * tip) / 100 / people).toFixed(2);
            tipOut.innerHTML = `$${tipOutRes}`;
            totalOut.innerHTML = `$${totalOutRes}`;

            // Enable button
            resetButton.disabled = false;
            resetButton.classList.remove('disabled');
        } else {
            tipOut.innerHTML = '$0.00';
            totalOut.innerHTML = '$0.00';
        }

        // If a value is not 0, enable button so we can reset
        if (
            bill !== 0 ||
            tip !== 0 ||
            people !== 0 ||
            !isNaN(bill) ||
            !isNaN(people) ||
            !isNaN(tip)
        ) {
            resetButton.disabled = false;
            resetButton.classList.remove('disabled');
        }
    }
});

// Refresh result if we click on a button
tipSelect.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        // Only calculate if no value is 0
        if (
            bill !== 0 &&
            tip !== 0 &&
            people !== 0 &&
            !isNaN(bill) &&
            !isNaN(people)
        ) {
            // Calculate & write tip
            let totalOutRes = ((bill * (100 + tip)) / 100 / people).toFixed(2);
            let tipOutRes = ((bill * tip) / 100 / people).toFixed(2);
            tipOut.innerHTML = `$${tipOutRes}`;
            totalOut.innerHTML = `$${totalOutRes}`;

            // Enable button
            resetButton.disabled = false;
            resetButton.classList.remove('disabled');
        }
    }
});
