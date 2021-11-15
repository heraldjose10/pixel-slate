function makeDivGrid(verticalNumber, unitSize) {

    let numberOfDivs = verticalNumber ** 2;
    let containerDivSide = verticalNumber * unitSize;

    setContainerSize(containerDivSide);

    for (let i = 0; i < numberOfDivs; i++) {
        makeUnitDiv();
    }
}


function makeUnitDiv() {
    const unitDiv = document.createElement('div');

    unitDiv.classList.add('unitDiv');
    unitDiv.addEventListener('mouseover', changeUnitDivColor);
    unitDiv.setAttribute('style', `width:${unitSize}px;height:${unitSize}px`);

    containerDiv.appendChild(unitDiv);
}


function setContainerSize(containerDivSide) {
    containerDiv.style.maxHeight = `${containerDivSide}px`
    containerDiv.style.maxWidth = `${containerDivSide}px`
}


function changeUnitDivColor(e) {
    if (rainbowModeOn) {
        const rainbowColors = ['blue', 'green', 'red', 'yellow', 'pink'];
        let randomNumber = getRandomNumber(rainbowColors.length)
        e.target.style.backgroundColor = rainbowColors[randomNumber];
    }
    else {
        e.target.style.backgroundColor = pickedColor;
    }

}

function getRandomNumber(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
}

function eraseModeOn(e) {
    if (this.checked) {
        previousPicked = pickedColor;
        pickedColor = 'white';
    }
    else {
        pickedColor = previousPicked;
    }
}

function controlRainbowMode(e) {
    (this.checked) ? rainbowModeOn = true : rainbowModeOn = false;
}

const containerDiv = document.querySelector('.container')

let verticalUnitsNumber = 80;
let unitSize = 5;

makeDivGrid(verticalUnitsNumber, unitSize);

const eraserButton = document.querySelector('#erase-mode');
eraserButton.addEventListener('change', eraseModeOn);

const rainbowModeButton = document.querySelector('#rainbow-mode');
rainbowModeButton.addEventListener('change', controlRainbowMode);