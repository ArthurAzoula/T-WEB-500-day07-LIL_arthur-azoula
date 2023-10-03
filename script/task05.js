const linkMusic = '../media/track.mp3';

const pause = document.querySelector('footer div button:first-of-type');
const stop = document.querySelector('footer div button:nth-of-type(2)');
const mute = document.querySelector('footer div button:last-of-type');

const canvas = document.querySelector('div canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.lineWidth = 1;
ctx.strokeStyle = '#fff';
ctx.stroke();
ctx.fillStyle = '#fff';
ctx.fill();

canvas.style.cursor = 'pointer';

canvas.addEventListener('click', () => { 
    audio.play();
});

const audio = new Audio(linkMusic);

pause.addEventListener('click', () => { 
    audio.pause()
});

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

mute.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
});