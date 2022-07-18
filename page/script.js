// Generate pixels

let clickingPixels = false;

const mainContainer = document.querySelector("#main-container");
mainContainer.addEventListener('mousedown', (e) => clickingPixels = true);
mainContainer.addEventListener('mouseup', (e) => clickingPixels = false);

function generatePixels(resolution) {
    if (pressedButton == true) {
        pixels = Array.from(mainContainer.querySelectorAll('div'));

        for (let item in pixels) {
            pixels[item].remove();
        }
    }

    let pixelSize = 700 / resolution;

    for (let i = 1; i <= resolution * resolution; i++) {
        mainContainer.appendChild(document.createElement('div'));
    }

    pixels = Array.from(mainContainer.querySelectorAll('div'));

    let pixelOpacity = 0.9;

    for (let item in pixels) {
        pixels[item].classList.add('pixel');
        pixels[item].style.height = `${pixelSize}px`;
        pixels[item].style.width = `${pixelSize}px`;
        pixels[item].addEventListener('mouseover', (e) => {
            if (clickingPixels) {
                if (e.target.classList == 'pixel') {
                    e.target.classList.add('pixel1');
                }
                else if (e.target.classList == 'pixel pixel1') {
                    e.target.classList.add('pixel2');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2') {
                    e.target.classList.add('pixel3');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3') {
                    e.target.classList.add('pixel4');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3 pixel4') {
                    e.target.classList.add('pixel5');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3 pixel4 pixel5') {
                    e.target.classList.add('pixel6');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3 pixel4 pixel5 pixel6') {
                    e.target.classList.add('pixel7');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3 pixel4 pixel5 pixel6 pixel7') {
                    e.target.classList.add('pixel8');
                }
                else if (e.target.classList == 'pixel pixel1 pixel2 pixel3 pixel4 pixel5 pixel6 pixel7 pixel8') {
                    e.target.classList.add('pixel9');
                }
            }
        });
    }
}

//Change pixel resolution button
const btn = document.querySelector('#btn');
let pressedButton = false;

function resPrompt() {
    let res = 0;
    while (res < 1 || res > 100) {
        res = prompt("Write a resolution from 1 to 100:", "64");
    }
    return res;
};

btn.addEventListener('click', () => {
    pressedButton = true;
    generatePixels(resPrompt())
    pressedButton = false;
});

//Testing Zone - CAREFULL

generatePixels(64);