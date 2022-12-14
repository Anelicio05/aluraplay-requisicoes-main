import { conectaApi } from "./conectaApi.js";
import controiCard from "./mostraVideo.js"

async function buscaVideo(){
    const barraDePesquisa = document.querySelector("[data-pesquisa]").value
    const lista = document.querySelector("[data-lista]")
    const busca = await conectaApi.buscaVideo(barraDePesquisa)

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(controiCard(element.titulo, element.descricao, element.url, element.imagem)));
    
    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

botaoPesquisa.addEventListener("click", buscaVideo)
