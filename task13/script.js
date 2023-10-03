/* first part */

const form = document.querySelector('form:first-of-type');
const input = document.querySelector('input:first-of-type');
const select = document.querySelector('select:first-of-type');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value === '') {
        return;
    }
    const li = document.createElement('li');
    li.textContent = input.value;
    document.querySelector('ul:first-of-type').appendChild(li);
    li.classList.add(select.value);
});

/* second part */

const form2 = document.querySelector('form:last-of-type');
const select2 = document.querySelector('select:last-of-type');
const search = document.querySelector('form:last-of-type button:first-of-type');
const reset = document.querySelector('form:last-of-type button:last-of-type');
const ul = document.querySelector('ul:last-of-type');

search.addEventListener('click', (event) => {
    event.preventDefault();
    ul.textContent = '';
    const arraySearch = document.querySelectorAll(`.${select2.value}`);
    if (arraySearch.length === 0) {
        ul.textContent = 'nothing';
        return;
    }
    arraySearch.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element.textContent;
        ul.appendChild(li);
        li.classList.add(select.value);
    });
});
