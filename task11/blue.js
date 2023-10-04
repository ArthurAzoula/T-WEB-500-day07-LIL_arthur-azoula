const p = document.querySelector('p');

const addClassFunction = () => {
    p.addEventListener('mouseenter', () => {
        p.classList.add('blue');
    })

    p.addEventListener('mouseleave', () => {
        p.classList.remove('blue');
    });

    p.addEventListener('click', () => {
        p.classList.toggle('hightlight');
    });
}

addClassFunction();