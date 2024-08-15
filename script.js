
let Grid = 600;
let currentColor= "black";
let randomColor = false;

const mainContainer = document.querySelector("#main-container");
const resetButton = document.querySelector("#reset-button");
const sizeButton = document.querySelector("#size-button");
const randomButton = document.querySelector("#random-button");
const colorPicker = document.querySelector("#color-picker");

mainContainer.style.width = `${Grid}px`;
mainContainer.style.height = `${Grid}px`;

function setBackgroundColor(){
    if(randomColor){
        let randomHexColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randomHexColor.padStart(6,'0')}`;
    }
    else{
        this.style.backgroundColor = currentColor;
    }
}

function createGrid(){
    mainContainer.innerHTML = '';
    const squareSize = mainContainer.clientWidth / sizeButton;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.boxSizing = 'border-box';
            square.style.border = '1px solid #ccc'; // Optional: Add border for better visibility
            square.addEventListener('click', setBackgroundColor); // Add event listener for color change
            mainContainer.appendChild(square);
        }
    }
}

createGrid(16)