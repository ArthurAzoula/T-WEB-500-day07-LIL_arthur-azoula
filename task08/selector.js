const links = document.querySelectorAll('a:not([target="_blank"])');

function changeOpacityLinks(links) {
    links.forEach(link => {
        link.style.opacity = 0.5;
    });
}

changeOpacityLinks(links);