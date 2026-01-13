const alunos = [ 'Renzo', 'Júlia', 'Bruno', 'Kaique' ];

console.log(alunos[3]); // Acessando o primeiro elemento do array

alunos[4] = 'Ana'; // Adicionando um novo elemento ao array
alunos.push('Carlos'); // Adicionando um novo elemento ao final do array
alunos.unshift('Mariana'); // Adicionando um novo elemento no início do array
alunos.pop(); // Removendo o último elemento do array
alunos.shift(); // Removendo o primeiro elemento do array
alunos.splice(0, 1); // Removendo o primeiro elemento do array (indice inicial, numero de deletes)


console.log(alunos);
console.log(alunos.length); // Imprimindo o tamanho do array