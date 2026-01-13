const peso = 80; // peso em kg
const altura = 1.8; // altura em metros

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do peso. IMC: ' + imc.toFixed(2));
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal. IMC: ' + imc.toFixed(2));
} 
else if (imc >= 25 && imc < 29.9) {
    console.log('Sobrepeso. IMC: ' + imc.toFixed(2));
}
else if (imc >= 30 && imc < 40) {
    console.log('Obesidade. IMC: ' + imc.toFixed(2));
}
else {
    console.log('Obesidade grave. IMC: ' + imc.toFixed(2));
}