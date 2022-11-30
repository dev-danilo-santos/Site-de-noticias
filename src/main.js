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
    for (let i = 1; i <= 10; i++) {
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
    for(let i = 1; i<=list.length; i++){
        let html = `<div class="card">
        <img src="https://picsum.photos/200/200" alt="imagem noticia">
        <h4>Título Notícia ${i} </h4>
        </div>`;
    let div = document.createElement('div');
    div.innerHTML = html;
    document.getElementById('coluna-esquerda').appendChild(div);

    }

}