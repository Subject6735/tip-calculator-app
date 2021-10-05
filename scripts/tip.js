// Get the tip
const tipSelect = document.querySelector('#tipselect');
const customTip = document.querySelector('#customtip');
let tip = 0;

// Previously clicked button
let prevTarget = undefined;

tipSelect.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        // Remove clicked state of previously clicked button
        if (prevTarget !== undefined) {
            prevTarget.classList.remove('btn-clicked');
        }

        // Save currently and previously clicked button
        let curTarget = e.target;
        curTarget.classList.add('btn-clicked');
        prevTarget = curTarget;

        const tipAmount = e.target.getAttribute('data-amount');
        tip = parseInt(tipAmount);

        // Enable resetbutton
        resetButton.disabled = false;
        resetButton.classList.remove('disabled');
    }
});

// Get the custom tip
tipSelect.addEventListener('input', (e) => {
    if (e.target.matches('input')) {
        tip = parseFloat(e.target.value);
    }
});

// Remove button clicked states if we click on the input
customTip.addEventListener('click', () => {
    const btns = document.querySelectorAll('#tipselect button');
    btns.forEach((btn) => btn.classList.remove('btn-clicked'));
});
