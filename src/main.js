let nav = document.getElementById('navbar');
let imgList = document.getElementById('img-lista');
let imgUser = document.getElementById("img-user");
let inputSearch = document.getElementById('pesquisar')

nav.addEventListener('mouseenter', entradaMouse);
nav.addEventListener('mouseleave', saidaMouse);

function entradaMouse(){
    nav.style.backgroundColor = "rgba(215, 30, 30)";
    imgList.style.filter = "invert()";
    imgUser.style.filter = "invert()";
    inputSearch.style.backgroundColor = "white"

}

function saidaMouse(){
    nav.style.backgroundColor = "rgba(215, 30, 30, 0.5)";
    imgList.style.filter = "none";
    imgUser.style.filter = "none";
    inputSearch.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
}

function buscar(event){
    let key = event.keyCode;
    let inpt = document.getElementById('pesquisar'); 
    let txt = inpt.value;

    let listaEncontrados = [];

    if(key == 13) {
        listaDeNoticias.forEach(element => {
            if(element.texto.toLowerCase().includes(txt.toLowerCase()) 
            || element.titulo.toLowerCase().includes(txt.toLowerCase())){
                listaEncontrados.push(element)
            }
        });
    }

    listaEncontrados.forEach(element => {
        let div =  document.createElement('div');
        div.appendChild

        document.getElementById('noticias-resultados').appendChild()
    });

}

function criarNoticias(quantidade){
    let listaNoticia = [];
    for (let i = 1; i <= quantidade; i++) {
        var noticia = new Object();
        if(i == 1){
            noticia.titulo = `Goleiro brilha nos pênaltis, e Croácia avança às quartas de final na Copa`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/goleiro.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 2){
            noticia.titulo = `Goleiro brilha nos pênaltis, e Croácia avança às quartas de final na Copa`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/goleiro.jpg'
            
            listaNoticia.push(noticia)  
        }
        else {
            noticia.titulo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rem? ${i}`
            noticia.texto = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ${i}`
            noticia.img = "https://picsum.photos/378/180";
            listaNoticia.push(noticia)  
        }
    }
    return listaNoticia;
}
var listaDeNoticias = criarNoticias(15);

function renderizarNoticias(){
    for(let i = 0; i<listaDeNoticias.length; i++){
    let divEl = document.createElement('a');
    let tituloNoticia = document.createElement('h3');
    let textoNoticia = document.createElement('p');
    let imgNoticia = document.createElement('img');
    
    imgNoticia.src = listaDeNoticias[i].img;
    tituloNoticia.innerHTML = listaDeNoticias[i].titulo;
    tituloNoticia.className = 'titulo-noticia';
    textoNoticia.innerHTML = listaDeNoticias[i].texto;
    textoNoticia.className = 'texto-noticia';
    
    divEl.href = 'google.com'
    divEl.target = 'blank'
    divEl.style.textDecoration = 'none'
    divEl.appendChild(tituloNoticia);
    divEl.appendChild(imgNoticia);
    divEl.appendChild(textoNoticia);
    divEl.appendChild(document.createElement('br'));
    
        if(i == 0) {
            document.getElementById('noticia-principal-dia').appendChild(divEl);
        } else if(i == 1) {
            document.getElementById('primeira-noticia').appendChild(divEl);
        } else if(i == 2) {
            document.getElementById('segunda-noticia').appendChild(divEl);
        } else if(i < 7 ) {
            document.getElementById('coluna-direita').appendChild(divEl);
        } else if(i < 11 ) {
            document.getElementById('coluna-direita2').appendChild(divEl);
        }
        //  else if(i < 16 ) {
        //     document.getElementById('coluna-direita3').appendChild(divEl);
        // }
        else {
            document.getElementById('coluna-esquerda-sec').appendChild(divEl);
        }
    }

}
