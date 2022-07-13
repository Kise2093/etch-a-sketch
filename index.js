window.onload = () => {
    createPlane();
    document.addEventListener("mouseover", function(e) {
        const data = e.target.dataset.block;
        const domTarget = e.target;
        draw(data,domTarget);
    });
    document.addEventListener("click",() => location.reload() )
}

function draw(data,domTarget){
    if(data=="alock"){
        domTarget.classList.add("color");
    }
}

function createPlane(){
    for(var j = 0; j < 6;){
        const createColumn = document.createElement("div");
        j++;
        for(var i = 0; i < 6;i++){
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