// Validate form (number of people)

pplNum.addEventListener('input', () => {
    if (parseInt(pplNum.value) === 0) {
        document.querySelector('#pplerror').hidden = false;
        pplNum.style.outlineColor = 'orangered';
    } else {
        document.querySelector('#pplerror').hidden = true;
        pplNum.style.outlineColor = 'hsl(172, 67%, 45%)';
    }
});
