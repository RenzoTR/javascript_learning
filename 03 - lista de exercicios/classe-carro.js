class Carro {
    constructor(marca, modelo, ano, gastoKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.gastoKm = gastoKm; // consumo médio em litros por km
    }
}

const chevroletOnix = new Carro('Chevrolet', 'Onix', 2020, 0.7);

function calcularGasto(distancia, carro, precoCombustivel) {
    const litrosConsumidos = distancia * carro.gastoKm;
    const custoTotal = litrosConsumidos * precoCombustivel;
    return custoTotal;
}

console.log(`O gasto da viagem foi de R$ ${calcularGasto(73, chevroletOnix, 5.79).toFixed(2)}`);

