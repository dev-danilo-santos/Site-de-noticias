let nav = document.getElementById('navbar');
let imgList = document.getElementById('img-lista');
let imgUser = document.getElementById("img-user");
let inputSearch = document.getElementById('pesquisar')

nav.addEventListener('mouseenter', entradaMouse);
nav.addEventListener('mouseleave', saidaMouse);


function verificarLogin(){
    localStorage.setItem('logado',true)
    window.location.href = "index.html";
}

function isLogado(){
    if(localStorage.getItem('logado')){
        let nav = document.getElementById('inserir-noticias')
        let a = document.createElement('a')
        let p = document.createElement('p')
        a.href = 'userCMS.html'
        let btn =  document.createElement('button')
        btn.className = 'btn-nav'
        btn.style.backgroundColor = 'rgba(215, 30, 30, 0)'
        btn.style.border = 'none';
        p.innerHTML = 'Inserir Notícias'
        btn.appendChild(p)
        a.appendChild(btn)
        nav.appendChild(a)
        
        let navb = document.getElementById('logout')
        let div = document.createElement('div')
        div.innerHTML = `<button class="btn-nav" onclick="logout()" style="background-color: rgba(215, 30, 30, 0); border: none;"><p>Logout</p></button>`
        navb.appendChild(div)

    }
}

function logout(){
    localStorage.clear();
    location.reload()
}


function entradaMouse(){
    nav.style.backgroundColor = "rgba(215, 30, 30)";
    // imgList.style.filter = "invert()";
    imgUser.style.filter = "invert()";
    inputSearch.style.backgroundColor = "white"

}

function saidaMouse(){
    nav.style.backgroundColor = "rgba(215, 30, 30, 0.5)";
    // imgList.style.filter = "none";
    imgUser.style.filter = "none";
    inputSearch.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
}

function efeitoImagem(img){
    
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

        if(listaEncontrados.length == 0) {
            window.alert('Nenhum resultado encontrado')
        } 
    }
    if(listaEncontrados.length != 0){
        let el = document.getElementById('resultados-busca');
        el.style.borderStyle = 'groove'
        el.style.borderColor = 'rgba(215, 30, 30)'
        el.style.margin = '10px'
        el.style.padding = '10px'

        document.getElementById('resultados-busca').innerHTML = ""
        let h2 = document.createElement('h2')
        h2.innerHTML = 'Resultados da busca'
        h2.style.width = '100%'
        h2.style.textAlign = 'center'
        document.getElementById('resultados-busca').appendChild(h2)

        listaEncontrados.forEach(element => {
            let divp = document.createElement('a')
            divp.href = ""
            divp.className = 'card-pai'
            let div2 = document.createElement('div')
            let titulo = document.createElement('h3')
            let texto = document.createElement('p')

            divp.style.backgroundImage = `url(${element.img})`
            titulo.innerHTML = element.titulo
            texto.innerHTML =(element.texto)
            div2.appendChild(titulo);
            div2.appendChild(texto)
        
            divp.appendChild(div2)
            document.getElementById('resultados-busca').appendChild(divp)
            divp.style.margin = '10px'

        });
    }

}

function criarNoticias(quantidade){
    let listaNoticia = [];
    for (let i = 1; i <= quantidade; i++) {
        var noticia = new Object();
        if(i==1){
            noticia.titulo = `Risco de guerra nuclear está aumentando, mas não somos loucos, diz Putin`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/putin2.jpg'
            
            listaNoticia.push(noticia) 
        }  
        else if(i == 2){
            noticia.titulo = `Guerra “vai demorar” e risco nuclear aumenta, diz Putin`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/putin.png'
            
            listaNoticia.push(noticia)  
        } else if(i == 3){
            noticia.titulo = `Polêmica, a ilusão de ótica que causou confusão no gol do Japão pela copa do mundo`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/goljapao.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 4){
            noticia.titulo = `Alagoas confirma 383 casos de Covid nas últimas 24 horas`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/covid.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 5){
            noticia.titulo = `Goleiro do Sevilla brilha nos pênaltis e Marrocos elimina Espanha`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/espanhaeliminada.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 6){
            noticia.titulo = `Goleiro brilha nos pênaltis, e Croácia avança às quartas de final na Copa`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/goleiro.jpeg'
            
            listaNoticia.push(noticia)  
        }else if(i == 7){
            noticia.titulo = `Neymar volta de lesão e é eleito melhor do jogo contra a Coreia do Sul`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/neymar.jpeg'
            
            listaNoticia.push(noticia)  
        }else if(i == 8){
            noticia.titulo = `‘Derrota dolorida, porém em paz comigo mesmo’, diz Tite ao confirmar saída da Seleção`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/tite.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 9){
            noticia.titulo = `Justiça aceita denúncia e Roberto Jefferson vira réu por tentativa de homicídio contra policiais federais e outros crimes`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/robertoj.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 10){
            noticia.titulo = `Indignado com a derrota da seleção na Copa, torcedor paraense arremessa TV no meio da rua: 'Brasil fuleiro'`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/tv.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 11){
            noticia.titulo = `Exames apontam lesões, e Gabriel Jesus e Alex Telles estão fora da Copa do Mundo`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/lesao.png'
            
            listaNoticia.push(noticia)  
        }else if(i == 12){
            noticia.titulo = `Covid: as duras regras de controle suspensas pela China após protestos`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/covid2.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 13){
            noticia.titulo = `Os jovens que ainda usam máscara por vergonha de mostrar o rosto: 'Sou feio, mãe'`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/mascara.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 14){
            noticia.titulo = `Gripe aviária: há risco para humanos após surto que matou 50 milhões de aves nos EUA?`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/gripe.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 15){
            noticia.titulo = `Quem são os 'cidadãos do reich', extremistas de direita acusados de tramar golpe na Alemanha`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/extremistas.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 16){
            noticia.titulo = `3 pontos para entender caos político que causou queda e prisão de Castillo no Peru`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/presidenteperu.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 17){
            noticia.titulo = `Risco de guerra nuclear está aumentando, mas não somos loucos, diz Putin`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/putin2.jpg'
            
            listaNoticia.push(noticia)  
        }else if(i == 18){
            noticia.titulo = `Como cidades brasileiras aparecem em ranking de lugares mais caros do mundo`
            noticia.texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia." 
            + 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti at ducimus natus, earum doloribus minima consectetur quam? Ratione, quia.'
            
            noticia.img = 'src/img/noticias/cidadescaras.jpg'
            
            listaNoticia.push(noticia)  
        }
        

    }
    return listaNoticia;
}
var listaDeNoticias = criarNoticias(15);
