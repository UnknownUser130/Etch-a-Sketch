
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
        this.style.setBackgroundColor = `#${randomHexColor.padStart(6,'0')}`;
    }
    else{
        this.style.setBackgroundColor = currentColor;
    }
}