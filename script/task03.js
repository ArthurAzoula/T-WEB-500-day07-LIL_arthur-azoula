const div = document.querySelector('footer div');

let array = [];

document.addEventListener('keypress', (event) => {
    if (array.length < 42) {
        array.push(event.key);
    } else {
        array.shift();
        array.push(event.key);
    }

    div.innerText = array.join('');
});