const notas = [];

notas.push(7);
notas.push(8);
notas.push(9);
notas.push(6);
notas.push(5);


let soma = 0;
for (const nota of notas) {
    soma += nota;
}
const media = soma / notas.length;

console.log(`A média das notas é ${media}`);




// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }


// const nome = 'Renzo Torezani';

// for (let letra = 0; letra < nome.length; letra++) {
//     console.log(nome[letra]);
// }