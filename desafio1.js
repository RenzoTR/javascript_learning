const fuelprice = 5;
const etanolprice = 3.5;
let kmper_l = 11;
let distance = 1343;
let fueltype = 'pedro';

let totalfuelneeded = distance / kmper_l;
let totalcost = 0;

if (fueltype === 'gasolina') {
     let totalcost = totalfuelneeded * fuelprice;
     console.log('O custo total da viagem é de R$ ' + totalcost.toFixed(2), 'utilizando ' + totalfuelneeded.toFixed(2) + ' litros de ' + fueltype + '.'); 
} else if (fueltype === 'etanol') {
    let totalcost = totalfuelneeded * etanolprice;
    console.log('O custo total da viagem é de R$ ' + totalcost.toFixed(2), 'utilizando ' + totalfuelneeded.toFixed(2) + ' litros de ' + fueltype + '.'); 
} else {
    console.log('Tipo de combustível inválido. Por favor, escolha "gasolina" ou "etanol".');
}


