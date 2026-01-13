function MeuNome(nome){
    return `Meu nome é ${nome}`;
}

function VerificaIdade(idade){
    if (idade >= 18){
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}







(function main(){
    const nome = "Júlia Pena Guimarães";
    const idade = 17;
    console.log(MeuNome(nome));
    console.log(VerificaIdade(idade));
})();