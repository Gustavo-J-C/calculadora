let valor;
let resultado;

function botao(value) {
    valor = document.calc.visor.value += value;
}

function reseta() {

    document.calc.visor.value = '';
}

function calcula() {
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}



function raiz(value) {
    return Math.sqrt(value);
}