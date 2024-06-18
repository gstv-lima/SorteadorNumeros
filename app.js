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

    alterarBtn();
}

function seletorAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBtn(){
    botao = document.getElementById('btn-reiniciar');
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
}

function reiniciar(){

    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    sorteados = []; 
}