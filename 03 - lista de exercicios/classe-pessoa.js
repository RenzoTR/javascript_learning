class Pessoa { 
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
}

const renzo = new Pessoa('Renzo Torezani', 80, 1.73);

function calcularIMC(pessoa){
    return pessoa.peso / (pessoa.altura * pessoa.altura);
}

function classificarIMC(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
    } else if(imc >= 25 && imc < 30){
        return 'Acima do peso';
    } else {
        return 'Obeso';
    }
}

(function main(){
    const imc = calcularIMC(renzo);
    const classificacao = classificarIMC(imc);
    console.log(`Meu nome é ${renzo.nome} e meu IMC é ${imc.toFixed(2)}, e eu classificado como ${classificacao}.`);
})();