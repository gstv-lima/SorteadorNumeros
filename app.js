function sortear(){
    let qtdNum = parseInt(document.getElementById('quantidade').value);
    let numInicial = parseInt(document.getElementById('de').value);
    let numFinal = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];

    for (let i=0 ; i<qtdNum ; i++){
    let numero = seletorAleatorio(numInicial, numFinal);
        while (sorteados.includes(numero)){
            numero = seletorAleatorio(numInicial, numFinal);
        }
        sorteados.push(numero);
    }
    
    let campo = document.getElementById('resultado');
    campo.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

}

function seletorAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

