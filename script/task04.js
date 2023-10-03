const plusBtn = document.querySelector('div button:first-of-type');
const minusBtn = document.querySelector('div button:last-of-type');

const backgroundList = document.querySelector('div select');

backgroundList.addEventListener('change', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

plusBtn.addEventListener('click', () => {
    const fontSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${fontSize + 1}px`;
});

minusBtn.addEventListener('click', () => {
    const fontSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${fontSize - 1}px`;
});