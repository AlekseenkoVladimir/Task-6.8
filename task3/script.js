const trafficLightElRed = document.querySelector('#trafficLight-red');
const trafficLightElYellow = document.querySelector('#trafficLight-yellow');
const trafficLightElGreen = document.querySelector('#trafficLight-green');

function makeGreen() {
    trafficLightElGreen.style.background = 'green';
    trafficLightElYellow.style.background = 'black';
    trafficLightElRed.style.background = 'black';
    trafficLightElRed.removeEventListener('click', makeGreen);
    trafficLightElYellow.removeEventListener('click', makeGreen);
    trafficLightElGreen.removeEventListener('click', makeGreen);
    trafficLightElRed.addEventListener('click', makeRed);
    trafficLightElYellow.addEventListener('click', makeRed);
    trafficLightElGreen.addEventListener('click', makeRed);
}

function makeYellow() {
    trafficLightElYellow.style.background = 'yellow';
    trafficLightElGreen.style.background = 'black';
    trafficLightElRed.style.background = 'black';
    trafficLightElRed.removeEventListener('click', makeYellow);
    trafficLightElYellow.removeEventListener('click', makeYellow);
    trafficLightElGreen.removeEventListener('click', makeYellow);
    trafficLightElRed.addEventListener('click', makeGreen);
    trafficLightElYellow.addEventListener('click', makeGreen);
    trafficLightElGreen.addEventListener('click', makeGreen);
}

function makeRed() {
    trafficLightElRed.style.background = 'red';
    trafficLightElGreen.style.background = 'black';
    trafficLightElYellow.style.background = 'black';
    trafficLightElRed.removeEventListener('click', makeRed);
    trafficLightElYellow.removeEventListener('click', makeRed);
    trafficLightElGreen.removeEventListener('click', makeRed);
    trafficLightElRed.addEventListener('click', makeYellow);
    trafficLightElYellow.addEventListener('click', makeYellow);
    trafficLightElGreen.addEventListener('click', makeYellow);
}

trafficLightElRed.addEventListener('click', makeRed);
trafficLightElYellow.addEventListener('click', makeRed);
trafficLightElGreen.addEventListener('click', makeRed);






// trafficLightEl.removeEventListener('click', makeRed);
// trafficLightElRed.addEventListener('click', makeYellow);
// trafficLightElYellow.addEventListener('click', makeYellow);
// trafficLightElGreen.addEventListener('click', makeYellow);

// trafficLightElYellow.removeEventListener('click', makeYellow);
// trafficLightElRed.addEventListener('click', makeGreen);
// trafficLightElYellow.addEventListener('click', makeGreen);
// trafficLightElGreen.addEventListener('click', makeGreen);