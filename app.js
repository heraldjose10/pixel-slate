function makeDivGrid(verticalNumber) {

    let numberOfDivs = verticalNumber ** 2;
    let containerDivSide = 480;
    unitSize = containerDivSide / verticalNumber;

    setContainerSize(containerDivSide);

    for (let i = 0; i < numberOfDivs; i++) {
        makeUnitDiv();
    }
}


function makeUnitDiv() {
    const unitDiv = document.createElement('div');

    unitDiv.classList.add('unitDiv');

    unitDiv.setAttribute('style', `width:${unitSize}px;height:${unitSize}px;background-color:white`);
    // unitDiv.setAttribute('style',);

    unitDiv.addEventListener('mouseover', changeUnitDivColor);

    containerDiv.appendChild(unitDiv);
}


function setContainerSize(containerDivSide) {
    containerDiv.style.height = `${containerDivSide}px`
    containerDiv.style.width = `${containerDivSide}px`
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


function eraseModeOn() {

    if (this.checked) {
        previousPicked = pickedColor;
        pickedColor = 'white';
    }

    else {
        pickedColor = previousPicked;
    }
}


function controlRainbowMode() {
    (this.checked) ? rainbowModeOn = true : rainbowModeOn = false;
}


function cleanSlate() {
    const unitDivsList = document.querySelectorAll('.unitDiv');
    unitDivsList.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}

function changeGridSize() {

    const gridSizePTag = document.querySelector('.slider').querySelector('p');
    gridSizePTag.textContent = `${this.value}x${this.value}`;
    verticalUnitsNumber = this.value;

    containerDiv.textContent = '';
    makeDivGrid(verticalUnitsNumber);
}

function saveContainer() {

    const divToCapture = document.querySelector('#download');

    html2canvas(divToCapture).then((canvas) => {
        let link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvas.toDataURL('image/png', 0.9);
        link.click();
    });
}


const containerDiv = document.querySelector('.container')

let verticalUnitsNumber = 20;

makeDivGrid(verticalUnitsNumber);

const eraserButton = document.querySelector('#erase-mode');
eraserButton.addEventListener('change', eraseModeOn);

const rainbowModeButton = document.querySelector('#rainbow-mode');
rainbowModeButton.addEventListener('change', controlRainbowMode);

const clearButton = document.querySelector('.clear-slate');
clearButton.addEventListener('click', cleanSlate);

const sliderInput = document.querySelector('#grid-size');
sliderInput.addEventListener('input', changeGridSize);

const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', saveContainer);