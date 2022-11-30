let nav = document.getElementById('navbar');
let imgList = document.getElementById('img-lista');
let imgUser = document.getElementById("img-user");
let inputSearch = document.getElementById('pesquisar')

nav.addEventListener('mouseenter', entradaMouse);
nav.addEventListener('mouseleave', saidaMouse);

function entradaMouse(){
    nav.style.backgroundColor = "black";
    imgList.style.filter = "invert()";
    imgUser.style.filter = "invert()";
    inputSearch.style.backgroundColor = "white"

}

function saidaMouse(){
    nav.style.backgroundColor = "rgba(196, 195, 195,0.5)";
    imgList.style.filter = "none";
    imgUser.style.filter = "none";
    inputSearch.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
}   
function criarNoticias(){   
    let listaNoticia = [];
    for (let i = 1; i <= 5; i++) {
        var noticia = new Object();
        noticia.titulo = `Titulo da noticia ${i}`
        noticia.autor = `Autor da noticia ${i}`
        noticia.texto = `Texto da noticia ${i}`
        listaNoticia.push(noticia)
    }
    return listaNoticia;
}

function renderizarNoticias(){
    let list = criarNoticias();
    for(let i = 0; i<list.length; i++){
    let tituloNoticia = document.createElement('h3');
    let autorNoticia = document.createElement('p')
    let textoNoticia = document.createElement('p')
    
    tituloNoticia.innerHTML = list[i].titulo;
    tituloNoticia.className = 'titulo-noticia';
    autorNoticia.innerHTML = list[i].autor;
    autorNoticia.className = 'autor-noticia';
    textoNoticia.innerHTML = list[i].texto;
    textoNoticia.className = 'texto-noticia';

    
    document.getElementById('coluna-esquerda').appendChild(tituloNoticia);

    }

}