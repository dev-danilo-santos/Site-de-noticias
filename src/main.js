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
        noticia.img = 
        listaNoticia.push(noticia)
    }
    return listaNoticia;
}
let listaDeNoticias = criarNoticias(30);

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
        } else if(i < 7 ) {
            document.getElementById('coluna-direita').appendChild(tituloNoticia);
            document.getElementById('coluna-direita').appendChild(autorNoticia);
            document.getElementById('coluna-direita').appendChild(textoNoticia); 
        } else if(i < 11 ) {
            document.getElementById('coluna-direita2').appendChild(tituloNoticia);
            document.getElementById('coluna-direita2').appendChild(autorNoticia);
            document.getElementById('coluna-direita2').appendChild(textoNoticia); 
        } else if(i < 16 ) {
            document.getElementById('coluna-direita3').appendChild(tituloNoticia);
            document.getElementById('coluna-direita3').appendChild(autorNoticia);
            document.getElementById('coluna-direita3').appendChild(textoNoticia); 
        }
        else {
            document.getElementById('coluna-esquerda-sec').appendChild(tituloNoticia);
            document.getElementById('coluna-esquerda-sec').appendChild(autorNoticia);
            document.getElementById('coluna-esquerda-sec').appendChild(textoNoticia);
        }
    }

}

function NoticiasDetalhadas(){
    let noticiasJSON = '{"noticias":[{"titulo":"Opinião: Brasil tem reservas que seriam titulares em várias seleções","autor":"joao","imagem":"src/img/noticias/reservas-selecao.jpg","descricao":"Quarteto ofensivo de hoje é o mais jovem desde a era Pelé"},]}'
    return noticiasJSON;
}

function renderizarNoticiasdetalhadas(){
    let lista = JSON.parse(NoticiasDetalhadas());
    console.log(typeof(lista))

}