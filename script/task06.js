const footerEl = document.querySelector("footer");

const divEl = footerEl.querySelector("div:first-of-type");

const canvasEl = footerEl.querySelector("canvas");

const coordsEl = footerEl.querySelector("div:last-of-type");

let isDragging = false;

const limitCoords = (x, y) => {
    let divRect = divEl.getBoundingClientRect();
    let canvasRect = canvasEl.getBoundingClientRect();
    let { left, right, top, bottom } = divRect;

    let maxX = right - canvasRect.width;
    let maxY = bottom - canvasRect.height;

    let adjustedX = x < left ? left : x > maxX ? maxX : x;
    let adjustedY = y < top ? top : y > maxY ? maxY : y;

    return {
        x: parseInt(adjustedX - (left / 2 + right / 2)) + canvasRect.width / 2,
        y: parseInt(adjustedY - (top / 2 + bottom / 2)) + canvasRect.height / 2,
    };
};

canvasEl.addEventListener("mousedown", () => (isDragging = true));

document.addEventListener("mouseup", () => (isDragging = false));

document.addEventListener("mousemove", event => {
    if (!isDragging) return;

    const canvasRect = canvasEl.getBoundingClientRect();

    const offsetX = event.clientX - canvasRect.left + canvasRect.x;
    const offsetY = event.clientY - canvasRect.top + canvasRect.y;

    let { x, y } = limitCoords(offsetX, offsetY);

    canvasEl.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("mousemove", event => {
    if (!isDragging) return;

    let { x, y } = limitCoords(event.clientX, event.clientY);

    coordsEl.innerText = `New coordinates => {x: ${x}, y: ${y}}`;
});