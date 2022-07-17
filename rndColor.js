function changeColor(){
    const changeColor = document.getElementsByClassName("color");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeColor[0].style.backgroundColor = randomColor;
}