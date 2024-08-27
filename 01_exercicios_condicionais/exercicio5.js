/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

    Codigo condição de pagamento:
        - A vista Debito, recebe 10% de desconto;
        - a vista no dinheiro ou pix, recebe 15% de desconto;
        - em duas vezes, preço normal de etiqueta sem juros;
        - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const preçoNormal = 100;
const condicaoPagamento = 'Dividido';


if (condicaoPagamento === 'Debito') {
    const valorPagar = preçoNormal - (preçoNormal * 0.1);
    console.log(valorPagar);

} else if (condicaoPagamento === 'Dinheiro ou Pix') {
    const valorPagar = preçoNormal - (preçoNormal * 0.15);
    console.log(valorPagar);

} else if (condicaoPagamento === 'Dividido 2x') {
    const valorPagar = preçoNormal / 2;
    console.log('duas parcelas de',valorPagar);

}else if (condicaoPagamento === 'Dividido') {
    const valorPagar = preçoNormal + (preçoNormal * 0.1);
    console.log(valorPagar);

}