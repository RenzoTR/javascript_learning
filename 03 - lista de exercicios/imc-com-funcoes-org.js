
function calcularIMC(peso, altura){
    return peso / altura ** 2
}

function ClassificarIMC(imc){

if (imc < 18.5) {
    return('Abaixo do peso. IMC: ' + imc.toFixed(2));
}
else if (imc >= 18.5 && imc < 24.9) {
    return('Peso normal. IMC: ' + imc.toFixed(2));
} 
else if (imc >= 25 && imc < 29.9) {
    return('Sobrepeso. IMC: ' + imc.toFixed(2));
}
else if (imc >= 30 && imc < 40) {
    return('Obesidade. IMC: ' + imc.toFixed(2));
}
else {
    return('Obesidade grave. IMC: ' + imc.toFixed(2));
}

}


// Main
(function main(){
const peso = 80; // peso em kg
const altura = 1.8; // altura em metros
const imc = calcularIMC(peso, altura);
console.log(ClassificarIMC(imc));
})();

