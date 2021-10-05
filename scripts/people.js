// Get the number of people
const pplNum = document.querySelector('#number-of-ppl');
let people = 0;

pplNum.addEventListener('input', () => {
    people = parseInt(pplNum.value);
});
