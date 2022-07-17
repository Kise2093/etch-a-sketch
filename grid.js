//set default color
var whatColor = 'rgb(106, 240, 133);';

window.onload = () => {
    createPlane(3);
    document.addEventListener("mouseover", function(e) {
        const data = e.target.dataset.block;
        const domTarget = e.target;
        draw(data,domTarget,whatColor);
    });
    document.addEventListener("click", function(e) {
        //console.log(e.target.dataset.button)
        if(e.target.dataset.button == "reset"){
    //! number is equal to n which is the n x n for the grid
            let number = prompt("Number of Grid","6");
            if(number <= 64){
                removeGrid();
                createPlane(number);
            } 
            console.log("The number inputted is more than 64")
        }
        // if you want to change color click randColor button
        else if(e.target.dataset.button == "randColor"){
            const getSampleDOM = document.getElementById('sample');
            console.log("COLOR")
            //set random color ontop of default color
            whatColor = changeColor();
            console.log(whatColor)
            //set sample div into a color
            getSampleDOM.style.backgroundColor = "#" + whatColor;
            getSampleDOM.style.border = 'solid #' + whatColor + ' 1px'; 
        }
    } )
}

function draw(data,domTarget,whatColor){
    if(data=="alock"){
        domTarget.classList.add("color");
        domTarget.style.backgroundColor = "#" + whatColor;
    }
}

//Random COLOR generator
function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function createPlane(number){
    numberOfColumn(number)
    for(var j = 0; j < number;){     
        j++;
        for(var i = 0; i < number;i++){
            //Create <>
           createGrid(number);
        }
    }
}
//removing childNode of the parent to reset the board
function removeGrid(){
    const parentBlock = document.getElementById("parent");
    while (parentBlock.firstChild) {
        parentBlock.removeChild(parentBlock.firstChild);
    } 
}

function numberOfColumn(number){
    var auto = "";
    for(var i = 0;i < number;i++){
        auto = "auto " + auto;
    }
    return auto;
}

//create each grid using DOM manipulation
function createGrid(number){
    const createColumn = document.createElement("div");
    const parentBlock = document.getElementById("parent");
    parentBlock.appendChild(createColumn);
    parentBlock.setAttribute("style","grid-template-columns:" + numberOfColumn(number) +  ";" );
    
    createColumn.setAttribute("class", "block");
    createColumn.setAttribute("data-block", "alock");
}