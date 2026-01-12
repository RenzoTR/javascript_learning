const precoProduto = 100; // Preço original do produto
const descontoDebitoAvista = 0.10; // Desconto de 10% para pagamento à vista no debito
const descontoPixouDin = 0.15; // Desconto de 15% para pagamento à vista no dinheiro ou pix
const acrescimoParcelado = 0.10; // Acréscimo de 10% para pagamento parcelado

const formaPagamento = 'parcelado'; // Opções: 'debito', 'dinheiro', 'pix', 'parcelado'
let precoFinal = precoProduto;

if (formaPagamento === 'debito') {
    precoFinal = precoProduto * (1 - descontoDebitoAvista);
    console.log('Pagamento no débito à vista. Preço final: R$ ' + precoFinal.toFixed(2));
} else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
    precoFinal = precoProduto * (1 - descontoPixouDin);
    console.log('Pagamento em dinheiro ou pix à vista. Preço final: R$ ' + precoFinal.toFixed(2));
} else if (formaPagamento === 'parcelado') {
    precoFinal = precoProduto * (1 + acrescimoParcelado);
    console.log('Pagamento parcelado. Preço final: R$ ' + precoFinal.toFixed(2));
} else {
    console.log('Forma de pagamento inválida. Por favor, escolha entre "debito", "dinheiro", "pix" ou "parcelado".');
}