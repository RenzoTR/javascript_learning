function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

const precoProduto = 100.0; // preço do produto
const formaPagamento = 'parcelado'; // Opções: 'debito', 'dinheiro', 'pix', 'parcelado'

(function main(){

    if (formaPagamento === 'debito') {
    const precoFinal = aplicarDesconto(precoProduto, 10);
    console.log('Pagamento no débito à vista. Preço final: R$ ' + precoFinal.toFixed(2));
} else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
    const precoFinal = aplicarDesconto(precoProduto, 15);
    console.log('Pagamento em dinheiro ou pix à vista. Preço final: R$ ' + precoFinal.toFixed(2));
} else if (formaPagamento === 'parcelado') {
    const precoFinal = aplicarJuros(precoProduto, 10);
    console.log('Pagamento parcelado. Preço final: R$ ' + precoFinal.toFixed(2));
}

})();