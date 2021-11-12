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
    e.target.classList.add('color');
}

const containerDiv = document.querySelector('.container')

let verticalUnitsNumber = 80;
let unitSize = 10;

makeDivGrid(verticalUnitsNumber, unitSize);