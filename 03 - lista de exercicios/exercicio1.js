const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.0;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado. Média: ' + media.toFixed(2));
}
else if (media >= 5 && media <= 7) {
    console.log('Recuperação. Média: ' + media.toFixed(2));
}
else {
    console.log('Aprovado! Média: ' + media.toFixed(2));
}