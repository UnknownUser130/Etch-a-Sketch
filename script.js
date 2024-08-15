
let Grid = 600;
let currentColor= "black";
let randomColor = false;


const mainContainer = document.querySelector("#main-container");
const resetButton = document.querySelector("#reset");
const sizeButton = document.querySelector("#resize");
const randomButton = document.querySelector("#random-button");
const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener('input',(event) =>{
    currentColor = event.target.value;
    randomColor = false;
});

randomButton.addEventListener('click',()=>{
    randomColor = !randomColor;
});
mainContainer.style.width = `${Grid}px`;
mainContainer.style.height = `${Grid}px`;
mainContainer.style.display = 'flex';
mainContainer.style.flexWrap = 'wrap';


function setBackgroundColor(){
    if(randomColor){
        let randomHexColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randomHexColor.padStart(6,'0')}`;
    }
    else{
        this.style.backgroundColor = currentColor;
    }
}

function createGrid(size){
    mainContainer.innerHTML = '';
    const squareSize = mainContainer.clientWidth / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.boxSizing = 'border-box';
            square.style.margin = '0';
            square.style.border = 'none';
            square.addEventListener('mouseover', setBackgroundColor); // Add event listener for color change
            mainContainer.appendChild(square);
        }
    }
}
function resetGrid() {
    createGrid(16); 
}

resetButton.addEventListener('click', resetGrid);

function resizeGrid(){
    const User_size = prompt("Enter the size you want to set");
    createGrid(User_size);
}


sizeButton.addEventListener('click',resizeGrid)


createGrid(16)