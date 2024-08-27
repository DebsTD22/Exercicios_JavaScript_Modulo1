/*
    Crie uma função para calcular descontos

        Codigo condição de pagamento:
        - A vista Debito, recebe 10% de desconto;
        - a vista no dinheiro ou pix, recebe 15% de desconto;
        - em duas vezes, preço normal de etiqueta sem juros;
        - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros / 100));
}


const preçoNormal = 100;
const condicaoPagamento = 'Dividido';


if (condicaoPagamento === 'Debito') {
    console.log(aplicarDesconto(preçoNormal, 10));

} else if (condicaoPagamento === 'Dinheiro ou Pix') {
    console.log(aplicarDesconto(preçoNormal, 15));

} else if (condicaoPagamento === 'Dividido 2x') {
    const valorPagar = preçoNormal / 2;
    console.log('duas parcelas de',valorPagar);

}else if (condicaoPagamento === 'Dividido') {
    console.log(aplicarJuros(preçoNormal, 10));
}