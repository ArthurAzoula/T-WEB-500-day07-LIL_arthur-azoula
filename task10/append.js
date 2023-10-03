const btnAdd = document.querySelector('button');
const userInput = document.getElementById('listItem');

function addDivMessage(message) {;
    if (message === "") { return; }
    const div = document.createElement('div');
    div.textContent = message;
    document.querySelector('body').appendChild(div);
    userInput.value = "";
}

btnAdd.addEventListener('click',() => addDivMessage(userInput.value))