const form = document.querySelector('form');
const input = document.querySelector('input:first-of-type');
const select = document.querySelector('select');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value === '') { return; }
    const li = document.createElement('li');
    li.textContent = input.value;
    document.querySelector('ul').appendChild(li);
    li.classList.add(select.value);
});