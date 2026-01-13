function sayMyName(name) {

    console.log('Your name is: ' + name);
}

sayMyName('Renzo');
sayMyName('Julia');

function quadrado(valor) {
    return valor * valor;
}

const quadradodeDez = quadrado(10);
const quadradodeNove = quadrado(9);

console.log(quadradodeDez);


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(234, 8));