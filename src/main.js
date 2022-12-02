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
function criarNoticias(quantidade){
    let listaNoticia = [];
    for (let i = 1; i <= quantidade; i++) {
        var noticia = new Object();
        noticia.titulo = `Titulo da noticia ${i}`
        noticia.autor = `Autor da noticia ${i}`
        noticia.texto = `Texto da noticia ${i}`
        listaNoticia.push(noticia)
    }
    return listaNoticia;
}
let listaDeNoticias = criarNoticias(10);

function renderizarNoticias(){
    for(let i = 0; i<listaDeNoticias.length; i++){
    let tituloNoticia = document.createElement('h3');
    let autorNoticia = document.createElement('p')
    let textoNoticia = document.createElement('p')
    
    tituloNoticia.innerHTML = listaDeNoticias[i].titulo;
    tituloNoticia.className = 'titulo-noticia';
    autorNoticia.innerHTML = listaDeNoticias[i].autor;
    autorNoticia.className = 'autor-noticia';
    textoNoticia.innerHTML = listaDeNoticias[i].texto;
    textoNoticia.className = 'texto-noticia';
    
    if(i == 0) {
        document.getElementById('noticia-principal-dia').appendChild(tituloNoticia);
        document.getElementById('noticia-principal-dia').appendChild(autorNoticia);
        document.getElementById('noticia-principal-dia').appendChild(textoNoticia);
    } else if(i == 1) {
        document.getElementById('primeira-noticia').appendChild(tituloNoticia);
        document.getElementById('primeira-noticia').appendChild(autorNoticia);
        document.getElementById('primeira-noticia').appendChild(textoNoticia);
    } else if(i == 2) {
        document.getElementById('segunda-noticia').appendChild(tituloNoticia);
        document.getElementById('segunda-noticia').appendChild(autorNoticia);
        document.getElementById('segunda-noticia').appendChild(textoNoticia);
    }
    else {
        document.getElementById('coluna-direita').appendChild(tituloNoticia);
        document.getElementById('coluna-direita').appendChild(autorNoticia);
        document.getElementById('coluna-direita').appendChild(textoNoticia);
    }

}

}