window.onload = () => {
    createPlane(3);
    document.addEventListener("mouseover", function(e) {
        const data = e.target.dataset.block;
        const domTarget = e.target;
        draw(data,domTarget);
    });
    document.addEventListener("click", function(e) {
        console.log(e.target.dataset.button)
        if(e.target.dataset.button != undefined){
    //! number is equal to n which is the n x n for the grid
            let number = prompt("Number of Grid","6");
            if(number <= 64){
                removeGrid();
                createPlane(number);
            } 
            console.log("The number inputted is more than 64")
            
        }
    } )
}
//TODO: create a random function that rnd color
function draw(data,domTarget){
    if(data=="alock"){
        domTarget.classList.add("color");
    }
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