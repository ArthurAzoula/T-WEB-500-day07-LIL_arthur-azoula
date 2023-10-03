const div = document.querySelector('footer div');

let counter = 0;

div.innerText = counter;

div.addEventListener('click', function () {
    this.innerText = ++counter;
});
