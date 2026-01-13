class Pessoa{
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}


const renzo = new Pessoa();
renzo.nome = 'Renzo Torezani';
renzo.idade = 21;

const julia = new Pessoa();
julia.nome = 'Júlia Pena Guimarães';
julia.idade = 17;

console.log(renzo);
console.log(julia);