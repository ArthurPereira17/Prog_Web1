function minhaFuncao2(pParametro) {
    console.log('Parametro é: ' + pParametro);
}

function minhaFuncao3(pParametro) {
    return pParametro * 2;
}
      
function minhaFuncao4() {
    x += 10;
    vInterna2 = "Blumenau";
}

function minhaFuncao5() {
    var x = 100;
    var vInterna = "Brasil";
}

function escreveMensagem(pMensagem) {
    var vDiv = document.getElementById('mensagem')
    vDiv.innerHTML = pMensagem;
}

function alteraMensagem(){
    vInput = document.getElementById('textoMensagem');
    var vMensagem = document.getElementById('mensagem')
    vMensagem.innerHTML = vInput.value;
}