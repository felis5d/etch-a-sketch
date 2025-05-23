const sketchpadContainer = document.querySelector('.sketchpad-container');
const gridValue = document.getElementById('grid-value');
const slider = document.getElementById('grid-dimension');
let gridDimension = slider.value;  
gridValue.innerHTML = '50 x 50';

function createGrid() {
    for (let i=0; i<gridDimension; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        sketchpadContainer.appendChild(gridRow);

        for (let i=0; i<gridDimension; i++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('grid-column');
            gridRow.appendChild(gridColumn);
        }

    }
}

function changeGrid() {
    gridDimension = slider.value;
    gridValue.innerHTML = `${gridDimension}&nbsp;x&nbsp;${gridDimension}`;

    while (sketchpadContainer.firstChild) {
        sketchpadContainer.removeChild(sketchpadContainer.firstChild);
    }
    
    if(!sketchpadContainer.firstChild) {console.log('idk')}

    createGrid();
    draw();
}

createGrid();

function getSquares() {
    let squares = document.getElementsByClassName('grid-column');
    let squaresArray = Array.from(squares);
    return squaresArray;
}

function draw() {
    function color() {
        this.classList.add('blue');
    }
    
    squaresArray = getSquares();
    squaresArray.forEach((square) => {
        square.addEventListener('pointermove', color);
        square.addEventListener('touchmove', color);
    })
}

draw();

function eraseEverything() {
    squaresArray = getSquares();
    squaresArray.forEach((square) =>
        square.classList.remove('blue')
    )
}