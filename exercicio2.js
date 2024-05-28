/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
    1- Preço do etanol;
    2- Preço da gasolina;
    3- Tipo de combustivel que esta no seu carro;
    4- Gasto médio de combustivel do carro p/km;
    5- Distância em Km da viagem;

Imprimir no console o valor que será gasto para realizar a viagem.*/

const etanol = 2;
const gasolina = 5;
const combustivelPorKm = 12; //12km com 1L de combustivel
const kmViagem = 300;

const tipoCombustivel ='a';

const gastoMedio = kmViagem / combustivelPorKm; // 25L nessa viagem



if (tipoCombustivel === 'Etanol') {
    let valorViagem = gastoMedio * etanol;
    console.log(valorViagem);
} else {
    let valorViagem = gastoMedio * gasolina;
    console.log(valorViagem);
}














