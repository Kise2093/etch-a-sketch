window.onload = () => {
    createPlane();
    document.addEventListener("mouseover", function(e) {
        const data = e.target.dataset.block;
        const domTarget = e.target;
        draw(data,domTarget);
    });
    document.addEventListener("click",() => {
        removeGrid();
        //location.reload();
        let number = prompt("Number of Grid","6");
        
        createPlane(number);
    } )
}

function draw(data,domTarget){
    if(data=="alock"){
        domTarget.classList.add("color");
    }
}
//TODO: modified so that j and i can get value from prompt
function createPlane(number){
    for(var j = 0; j < modifiedGrid(number);){
        const createColumn = document.createElement("div");
        j++;
        for(var i = 0; i < modifiedGrid(number);i++){
            //Create <>
            const parentBlock = document.getElementById("parent");
            parentBlock.appendChild(createColumn);
            createColumn.setAttribute("id", "column" + j);

            const columnNumberN = document.getElementById("column" + j);
            const block = document.createElement("div");
            columnNumberN.appendChild(block);
            block.setAttribute("class", "block");
            block.setAttribute("data-block", "alock");
        }
    }
}
//removing childNode of the parent 
function removeGrid(){
    const parentBlock = document.getElementById("parent");
    while (parentBlock.firstChild) {
        parentBlock.removeChild(parentBlock.firstChild);
    } 
}

function modifiedGrid(number){
    if(number != undefined){
         return number;
    } else { 
        console.log(number)
        return 6;
    }
}