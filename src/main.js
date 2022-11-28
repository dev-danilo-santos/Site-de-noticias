let nav = document.getElementById('navbar');
let imgList = document.getElementById('img-lista');
let imgUser = document.getElementById("img-user");
nav.addEventListener('mouseenter', entradaMouse);
nav.addEventListener('mouseleave', saidaMouse);

function entradaMouse(){
    nav.style.backgroundColor = "black";
    imgList.style.filter = "invert()";
    imgUser.style.filter = "invert()";
}

function saidaMouse(){
    nav.style.backgroundColor = "rgba(196, 195, 195,0.5)";
    imgList.style.filter = "none";
    imgUser.style.filter = "none";
}   
    var listaNoticia = [];
    var noticia = new Object();
function criarNoticias(){
    

}
