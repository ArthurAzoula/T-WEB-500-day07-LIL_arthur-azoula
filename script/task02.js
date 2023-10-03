const div = document.querySelector('footer div');

div.addEventListener('click', () => {
    let username = prompt(`What's your name ?`);
    while (username == null || username == "") {
        username = prompt(`What's your name ?`);
    }
    let confirmationbox = confirm(`Are you sure your name is ${username} ?`);
    if (confirmationbox) {
        alert(`Hello ${username} !`);
        div.innerText = `Hello ${username} !`;
    }
});