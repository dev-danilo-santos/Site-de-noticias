let nav = document.getElementById('navbar');
let imgList = document.getElementById('img-lista');
nav.addEventListener('mouseenter', entradaMouse);
nav.addEventListener('mouseleave', saidaMouse);


function entradaMouse(){
    nav.style.backgroundColor = "black";
    imgList.style.filter = "invert()";
}

function saidaMouse(){
    nav.style.backgroundColor = "rgba(0,0,0,0.5)";
    imgList.style.filter = "none";
}