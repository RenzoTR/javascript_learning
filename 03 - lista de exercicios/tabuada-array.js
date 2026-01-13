function main() {
    const tabuada = [];
    const numero = 7; // Número para o qual a tabuada será gerada 
    for (let i = 1; i <= 10; i++) {
        tabuada.push(numero * i);
    }   
    console.log(`Tabuada do ${numero}:`);
    for (let i = 0; i < tabuada.length; i++) {
        console.log(`${numero} x ${i + 1} = ${tabuada[i]}`);
    }
}

main();