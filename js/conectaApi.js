async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos")
    const dados = await conexao.json()
    
    return dados
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!conexao.ok){
        throw new Error("Não foi possivel enviar o video")
    }

    const conexaoCovertida = await conexao.json()
    return conexaoCovertida
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const coverteApi = await conexao.json()
    return coverteApi
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
