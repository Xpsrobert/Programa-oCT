const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json;
    console.log(dados);
}
visualizarInformacoesGlobais();