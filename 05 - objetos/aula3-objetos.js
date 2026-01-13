// console.log('Hello, World!'); -> console é um objeto, log é um dos métodos do objeto console
// console.error('Hello, World!'); -> error é outro método do objeto console
// console.warn('Hello, World!'); -> warn é outro método do objeto console

const pessoa = {
    nome: 'Renzo Torezani',
    idade:  21,

    descrever: function() {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa.nome = 'João Silva'; // Modificando a propriedade nome do objeto pessoa
pessoa.idade = 30; // Modificando a propriedade idade do objeto pessoa

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
}

pessoa.descrever(); // Chamando o método descrever do objeto pessoa


// console.log(pessoa.nome); // Método .nome do objeto pessoa
// console.log(pessoa.idade); // Método .idade do objeto pessoa
// console.log(pessoa); // Imprime o objeto completo

// pessoa.altura = 1.75; // Adicionando uma nova propriedade ao objeto pessoa
// console.log(pessoa.altura);


// Acessando valores de forma dinâmica

const atributo = 'idade';
console.log(pessoa[atributo]); // Acessando a propriedade idade do objeto pessoa de forma dinâmica


