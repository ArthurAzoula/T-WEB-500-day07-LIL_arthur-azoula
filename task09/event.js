const firstBtn = document.querySelector('button:first-of-type');


function hiddenParagraph(button) {
    button.addEventListener('click', () => {
        const allParaph = document.querySelectorAll('p');
        allParaph.forEach(para => {
            para.style.visibility = "hidden";
            document.querySelector('h1').innerText = "All paragraphs are hidden... :(";
        })
    });
}


hiddenParagraph(firstBtn);
